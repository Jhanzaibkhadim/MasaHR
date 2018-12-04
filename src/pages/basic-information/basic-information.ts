import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-basic-information',
  templateUrl: 'basic-information.html',
})
export class BasicInformationPage {
  showbar: any=false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasicInformationPage');
  }

  showSearchbr(){
    console.log("here")
    if(this.showbar){
      this.showbar = false;
    }else{
      this.showbar = true;
    }
  }


}
