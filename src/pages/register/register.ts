import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Login } from '../login/login';
import { PopoverController } from 'ionic-angular';
import {Popover} from '../popover/popover';
import {Nurse} from '../nurse/nurse';
import {Emergency} from '../emergency/emergency';
import {ReportPage} from '../report/report';
import {Contact} from '../contact/contact';
import {Channel} from '../channel/channel';


/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {

users:FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,
   public alertCtrl: AlertController,
    angFire: AngularFire,
    public popoverCtrl: PopoverController) {

    this.users=angFire.database.list('/User');

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(Popover);
    popover.present({
      ev: myEvent
    });
  }

  register(name,email,password,confirm,gender,height,weight,blood,id,mobile){

    {
        
      this.users.push({

      name:name,
      email:email,
      password:password,
      confirm:confirm,
      gender:gender,
      height:height,
      weight:weight,
      blood:blood,
      id:id,
      mobile:mobile,
      


    })
   
  let alert = this.alertCtrl.create({
    title: 'Completed',
    subTitle: 'You are successfully registerd',
    buttons: ['Back to the Login']
  });
  alert.present();
   
}
this.navCtrl.push(Login);
}



 


  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
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
