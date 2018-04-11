import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Register} from '../register/register';
import {Channel} from '../channel/channel';
import {Forgot} from '../forgot/forgot';
import {AuthProviders ,AuthMethods,AngularFire} from 'angularfire2';
import { PopoverController } from 'ionic-angular';
import {Popover} from '../popover/popover';
import { LoadingController } from 'ionic-angular';
import {Nurse} from '../nurse/nurse';
import {Emergency} from '../emergency/emergency';
import {ReportPage} from '../report/report';
import {Contact} from '../contact/contact';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

email:any;
password:any;  

  constructor(public navCtrl: NavController, public navParams: NavParams,public angfire:AngularFire,public popoverCtrl: PopoverController,public loadingCtrl: LoadingController) {
  }


login(){
  this.angfire.auth.login({
    email:this.email,
    password:this.password
  },
  {
   provider:AuthProviders.Password,
   method:AuthMethods.Password
  }).then((response)=>{
    console.log('Login success'+ JSON.stringify(response));
    let currentuser={
      email:response.auth.email,
      picture:response.auth.photoURL
    };
    window.localStorage.setItem('currentuser',JSON.stringify(currentuser));
    this.navCtrl.pop();
  })
}
presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(Popover);
    popover.present({
      ev: myEvent
    });
  }

   presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }


fblogin(){
  this.angfire.auth.login({
    provider:AuthProviders.Facebook,
    method:AuthMethods.Popup
  }).then((response)=>{
    console.log('Login success with facebook' + JSON.stringify(response));
    let currentuser={

      email:response.auth.displayName,
      picture:response.auth.photoURL
    };
    window.localStorage.setItem('currentuser',JSON.stringify(currentuser));
    this.navCtrl.pop();
})
}

twitterlogin(){
  this.angfire.auth.login({
    provider:AuthProviders.Twitter,
    method:AuthMethods.Popup
  }).then((response)=>{
    console.log('Login success with twitter' + JSON.stringify(response));
    let currentuser={

      email:response.auth.displayName,
      picture:response.auth.photoURL
    };
    window.localStorage.setItem('currentuser',JSON.stringify(currentuser));
    this.navCtrl.pop();
})
}

  loadregister(){
    this.navCtrl.push(Channel);
  }
  crateAccount(){
    this.navCtrl.push(Register);
  }
  forgot(){
    this.navCtrl.push(Forgot);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
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
