import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../../screens/home/home.module').then(m => m.HomePageModule)
            },
            {
                path: 'basket',
                loadChildren: () => import('../../screens/basket/basket.module').then(m => m.BasketPageModule)
            },
            {
                path: 'favorite',
                loadChildren: () => import('../../screens/favorite/favorite.module').then(m => m.FavoritePageModule)
            },
            {
                path: 'account',
                loadChildren: () => import('../../screens/account/account.module').then( m => m.AccountPageModule)
            },
            {
                path: 'settings',
                loadChildren: () => import('../../screens/settings/settings.module').then(m => m.SettingsPageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
