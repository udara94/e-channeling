import { Component ,ViewChild} from '@angular/core';
import { NavController,Slides,AlertController } from 'ionic-angular';
import { Login } from '../login/login';
import {Channel} from '../channel/channel';
import {Nurse} from '../nurse/nurse';
import {Emergency} from '../emergency/emergency';
import {ReportPage} from '../report/report';
import {Contact} from '../contact/contact';
import { PopoverController } from 'ionic-angular';
import {Popover} from '../popover/popover';
import { AngularFire } from 'angularfire2';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   @ViewChild('mySlider') slider: Slides;
  selectedSegment: string;
  slides: any;

  constructor(public navCtrl: NavController,
  public popoverCtrl: PopoverController,
  public af:AngularFire,
  public alertCtrl: AlertController) {
    
if(!this.isLoggedin()){
  console.log('you are not logged in');
  this.navCtrl.push(Login);
}


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

  
 presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(Popover);
    popover.present({
      ev: myEvent
    });
  }


  isLoggedin(){
    if(window.localStorage.getItem('currentuser')){
      return true;
    }
  }
  nextp(){
    this.navCtrl.push(Login);
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
