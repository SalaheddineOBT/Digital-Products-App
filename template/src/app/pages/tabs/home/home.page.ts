import { AfterContentChecked, Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { EffectFade, SwiperOptions } from 'swiper';

// install Swiper modules
SwiperCore.use([EffectFade]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterContentChecked {

  config: SwiperOptions;
  config1: SwiperOptions;
  categories: any[] = [];
  trips: any[] = [];

  constructor() { }

  ngOnInit() {
    
    this.categories = [      
      { id: 1, name: 'Camp', image: 'assets/imgs/tent.png' },
      { id: 2, name: 'Mountains', image: 'assets/imgs/kheerganga.jpg' },
      { id: 3, name: 'Treking', image: 'assets/imgs/trek.jpg' },
      { id: 4, name: 'Lake', image: 'assets/imgs/lake.jpg' },
    ];

    this.trips = [      
      { id: 1, name: 'Banjir Kanal', category: 'Camp', image: 'assets/imgs/banjir.jpg', price: '12K' },
      { id: 2, name: 'Swiss Alps', category: 'Mountains', image: 'assets/imgs/swissalps.jpg', price: '20K' },
      { id: 3, name: 'Adi Kailash', category: 'Treking', image: 'assets/imgs/kailash.jpg', price: '5K' },
      { id: 4, name: 'Tarsar Lake', category: 'Lake', image: 'assets/imgs/tarsar.jpg', price: '15K' },
    ];
  }

  ngAfterContentChecked() {
    this.config = {
      slidesPerView: 2.1
    };
    this.config1 = {
      slidesPerView: 2
    };
  }

}
