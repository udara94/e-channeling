import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Nurse} from '../nurse/nurse';
import {Emergency} from '../emergency/emergency';
import {ReportPage} from '../report/report';
import {Contact} from '../contact/contact';
import {Channel} from '../channel/channel';

/**
 * Generated class for the History page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class History {

doctors: FirebaseListObservable<any>;


  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   angFire: AngularFire) {

     this.doctors = angFire.database.list('/history');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad History');
  }

   channel(){
    this.navCtrl.push(Channel);
  }
    reserve(){
    this.navCtrl.push(Nurse);
  }
  report(){
    this.navCtrl.push(ReportPage);
  }
   contact(){
    this.navCtrl.push(Contact);
  }
  emergency(){
    this.navCtrl.push(Emergency);
  }

}
