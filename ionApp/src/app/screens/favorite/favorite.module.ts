import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritePageRoutingModule } from './favorite-routing.module';

import { FavoritePage } from './favorite.page';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FavoritePageRoutingModule,
        ExploreContainerComponentModule
    ],
    declarations: [FavoritePage]
})
export class FavoritePageModule { }
