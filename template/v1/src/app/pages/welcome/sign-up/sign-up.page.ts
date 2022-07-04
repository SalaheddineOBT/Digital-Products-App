import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
// import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  form: FormGroup;
  selectedImage: any;

  constructor(
    // private camera: Camera,
    private actionSheetController: ActionSheetController
    // private file: File
  ) { 
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]}),
    });
  }

  checkPlatformForWeb() {
    if(Capacitor.getPlatform() == 'web') return true; // isPlatform('web')
    return false;
  }

  async takePicture() {
   // await Camera.requestPermissions();
    const image = await Camera.getPhoto({
      quality: 50,
      // allowEditing: true,
      source: CameraSource.Prompt,
      width: 600,
      resultType: this.checkPlatformForWeb() ? CameraResultType.DataUrl : CameraResultType.Uri
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    this.selectedImage = image;
    if(this.checkPlatformForWeb()) this.selectedImage.webPath = image.dataUrl;
  
    // Can be set to the src of an image now
    // imageElement.src = imageUrl;
  }

  // async takePicture() {
  //   // console.log('contact: ', contact);
  //   const actionSheet = await this.actionSheetController.create({
  //     header: 'Photo',
  //     // cssClass: 'my-custom-class',
  //     buttons: [{
  //       text: 'From Photos',
  //       handler: () => {
  //         console.log('gallary');
  //         this.takePhoto(0);
  //       }
  //     }, {
  //       text: 'Take Picture',
  //       handler: () => {
  //         console.log('camera');
  //         this.takePhoto(1);
  //       }
  //     }, {
  //       text: 'Cancel',
  //       icon: 'close',
  //       role: 'cancel',
  //       handler: () => {
  //         console.log('Cancel clicked');
  //       }
  //     }]
  //   });
  //   await actionSheet.present();

  //   // const { data } = await actionSheet.onDidDismiss();
  //   // console.log('onDidDismiss', data);
  // }

  // async takePhoto(sourceType: number) {
  //   const options: CameraOptions = {
  //     quality: 50,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     correctOrientation: true,
  //     sourceType: sourceType,
  //   };
  //   const image = await this.camera.getPicture(options);
  //   // this.selectedImage = 'data:image/jpeg;base64,' + image;
    
  //   // let filename = image.substring(image.lastIndexOf('/')+1);
  //   // let path =  image.substring(0,image.lastIndexOf('/')+1);
  //   // //then use it in the readAsDataURL method of cordova file plugin
  //   // //this.file is declared in constructor file :File
  //   // this.selectedImage = await this.file.readAsDataURL(path, filename);
  //   // // this.selectedImage = image;
  //   this.selectedImage = (<any>window).Ionic.WebView.convertFileSrc(image);
  // }

  onSubmit() {
    if(!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }

}

