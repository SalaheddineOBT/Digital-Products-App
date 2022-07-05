import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.scss'],
})
export class TripPage implements OnInit {

  segmentValue = '1';
  item: any;
  trips = [      
    { 
      id: 1, 
      name: 'Banjir Kanal', 
      category: 'Camp', 
      image: 'assets/imgs/banjir.jpg', 
      price: '12K', 
      rating: 4.5, 
      duration: 5, 
      description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      images: [
        'assets/imgs/banjir.jpg',
        'assets/imgs/swissalps.jpg',        
        'assets/imgs/lake.jpg'
      ]
    },
    { id: 2, name: 'Swiss Alps', category: 'Mountains', image: 'assets/imgs/swissalps.jpg', price: '20K', 
    rating: 4.8, 
    duration: 6, 
    description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    images: [
      'assets/imgs/swissalps.jpg',        
      'assets/imgs/banjir.jpg',
      'assets/imgs/lake.jpg'
    ] },
    { id: 3, name: 'Adi Kailash', category: 'Treking', image: 'assets/imgs/kailash.jpg', price: '5K', 
    rating: 4.9, 
    duration: 10, 
    description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    images: [
      'assets/imgs/kailash.jpg',
      'assets/imgs/swissalps.jpg',        
      'assets/imgs/banjir.jpg',
    ] },
    { id: 4, name: 'Tarsar Lake', category: 'Lake', image: 'assets/imgs/tarsar.jpg', price: '15K', 
    rating: 4.2, 
    duration: 3, 
    description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    images: [
      'assets/imgs/tarsar.jpg',
      'assets/imgs/swissalps.jpg',        
      'assets/imgs/lake.jpg'
    ] },
  ];
  currentImage: string;

  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('check id: ', id);
    if(!id) {
      this.navCtrl.back();
      return;
    } 
    this.item = this.trips.find(x => x.id == parseInt(id));
    this.currentImage = this.item.images[0];
  }

  segmentChanged(event) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }

  changeImage(image) {
    this.currentImage = image;
  }

}
