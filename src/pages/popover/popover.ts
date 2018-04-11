import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {Profile} from '../profile/profile';
import { AngularFire } from 'angularfire2';
import {Login} from '../login/login';
import {History} from '../history/history';

/**
 * Generated class for the Popover page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class Popover {

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public af:AngularFire,
   public alertCtrl: AlertController
  ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Popover');
  }

  popover(){

    this.navCtrl.push(Profile);
  }

  history(){
    this.navCtrl.push(History);
  }

   logout() {
      {
     this.af.auth.logout();
      let alert = this.alertCtrl.create({
    title: 'Logout',
    subTitle: 'You are successfully logout',
    buttons: ['Back to the Login']
  });
  alert.present();
      }
      this.navCtrl.push(Login);
  }

}
