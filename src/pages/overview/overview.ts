import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import ProgressBar from 'progressbar.js'

/**
 * Generated class for the OverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {
  showbar: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.progres();
  }

  progres(){
    
    setTimeout(() =>{
      var doc = document.getElementById("container")
      var bar = new ProgressBar.Circle(doc, {
        strokeWidth: 6,
        duration: 14,
        color: '#FFF',
        trailColor: '#2C374D',
        trailWidth: 3,
        svgStyle: null
      });
      bar.animate(0.6);
    },100);
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewPage');
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
