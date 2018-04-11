import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Call} from '../call/call';
import {Allergies} from '../allergies/allergies';
import {Medications} from '../medications/medications';
import {Sugeriesandimplants} from '../sugeriesandimplants/sugeriesandimplants';
import {Nurse} from '../nurse/nurse';
import {Emergency} from '../emergency/emergency';
import {ReportPage} from '../report/report';
import {Contact} from '../contact/contact';
import {Channel} from '../channel/channel';
/**
 * Generated class for the Emergencyinfo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-emergencyinfo',
  templateUrl: 'emergencyinfo.html',
})
export class Emergencyinfo {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

emergencycontact(){
    this.navCtrl.push(Call);

  }
   allergies(){
    this.navCtrl.push(Allergies);
   }
  
  medications(){
    this.navCtrl.push(Medications);
   }
   surgeriesandimplants(){
    this.navCtrl.push(Sugeriesandimplants);
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
