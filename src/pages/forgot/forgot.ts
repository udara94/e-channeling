import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import {Popover} from '../popover/popover';
import {Nurse} from '../nurse/nurse';
import {Emergency} from '../emergency/emergency';
import {ReportPage} from '../report/report';
import {Contact} from '../contact/contact';
import {Channel} from '../channel/channel';
/**
 * Generated class for the Forgot page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class Forgot {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Forgot');
  }
   presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(Popover);
    popover.present({
      ev: myEvent
    });
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
