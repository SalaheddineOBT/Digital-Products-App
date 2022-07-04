import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  model: any = {};
  screens: any[] = [];
  index = 0;

  constructor() {}

  ngOnInit() {
    this.screens = [
      { background: 'assets/imgs/1.png', title: 'Oops!..', subtitle: 'Something wrong with your', description: "connection, Please try again.", titleColor: 'light', color: 'medium', button: 'RETRY', buttonColor: 'light' },
      { background: 'assets/imgs/2.png', title: 'Oops!..', subtitle: 'Looks like the file that you are looking for is', description: "missing...", titleColor: 'light', color: 'medium', button: 'RETRY', buttonColor: 'light' },
      { background: 'assets/imgs/3.png', title: 'Hmmm...', subtitle: 'Something is wrong here...', description: "We'll fix it soon!", titleColor: 'light', color: 'light', button: 'HOME', buttonColor: 'light' },
      { background: 'assets/imgs/4.png', title: 'Error!', subtitle: 'Something went wrong,', description: "Please try again later", titleColor: 'dark', color: 'medium', centerAlign: true, button: 'RETRY', buttonColor: 'light' },
      { background: 'assets/imgs/5.png', title: 'Camera Access', subtitle: 'Please allow access to your', description: "camera to take photos", titleColor: 'dark', color: 'medium', centerAlign: true, button: 'ALLOW', buttonColor: 'danger' },
      { background: 'assets/imgs/6.png', title: 'Connection Failed', subtitle: 'Could not connect to the network', description: "Please check & try again.", titleColor: 'dark', color: 'medium', centerAlign: true, button: 'RETRY', buttonColor: 'success' },
      { background: 'assets/imgs/7.png', title: 'No Results', subtitle: 'Sorry, there are no results for', description: "this search, Please try another phrase", titleColor: 'light', color: 'light', centerAlign: true, button: 'SEARCH', buttonColor: 'light' },
      { background: 'assets/imgs/8.png', title: 'Location Access', subtitle: 'Please enable location access', description: "to use this feature", titleColor: 'dark', color: 'medium', centerAlign: true, button: 'ENABLE', buttonColor: 'danger' },
      { background: 'assets/imgs/9.png', title: 'Dead End', subtitle: 'Oops! The page you are looking', description: "for doesn't exist...", titleColor: 'light', color: 'light', button: 'HOME', buttonColor: 'light' },
      { background: 'assets/imgs/10.png', title: 'You\'re Offline', subtitle: 'No internet connection, please try', description: "restarting your router...", titleColor: 'dark', color: 'dark', centerAlign: true, button: 'RETRY', buttonColor: 'light' },
      { background: 'assets/imgs/11.png', title: 'Payment Failed', subtitle: 'Your card was rejected by the vendor', description: "Please try again.", titleColor: 'dark', color: 'medium', centerAlign: true, button: 'RETRY', buttonColor: 'danger' },
      { background: 'assets/imgs/12.png', title: 'No Connection', subtitle: 'Your internet connection was', description: "interrupted, Please retry.", titleColor: 'dark', color: 'medium', button: 'RETRY', buttonColor: 'dark' },
    ];
    this.model = this.screens[this.index];
    this.index++;
    this.autoplayScreens();
  }

  autoplayScreens() {
    if(this.index == this.screens.length) this.index = 0;
    setTimeout(() => {
      this.model = this.screens[this.index];
      this.index++;
      this.autoplayScreens();
    }, 5000);
  }

}
