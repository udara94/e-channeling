import { Component } from '@angular/core';
import { Session} from '../session/session';
import {  NavController, NavParams,AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import * as firebase from 'firebase';
import {ChannelPlan} from '../channel-plan/channel-plan';
import { PopoverController } from 'ionic-angular';
import {Popover} from '../popover/popover';
import {Nurse} from '../nurse/nurse';
import {Emergency} from '../emergency/emergency';
import {ReportPage} from '../report/report';
import {Contact} from '../contact/contact';
import {Channel} from '../channel/channel';


@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})

export class Search {

public username:any="";
telephone:number;
id:any="";
email:any="";

Doctor:FirebaseListObservable<any>;
name : any = "";
special:any="";
date:any="";
apno:any="";
time:any="";
payment:any="";

doctor: any=0;

check:any;



  constructor(
  public navCtrl: NavController,
   public navParams: NavParams,
   public af:AngularFire,
   public alertContol:AlertController,
   public popoverCtrl: PopoverController) {
 
 this.name = navParams.get('name');
 this.special =navParams.get('special');
 this.date=navParams.get('date');
 this.time=navParams.get('time');
 this.apno=navParams.get('apno');
 this.payment=navParams.get('payment');


this.doctor = af.database.list('/doctor');

this.username='udara';
  this.telephone=716266258;
  this.id='942690347v';
  this.email='udaraabethilake@yahoo.com';




}


public checked=[
  {
    check:true,
  }
]




/*gotonextpage(checkbox){
  if(this.checkbox=true){
   alert('dsmsd');
  }
  else{
    this.navCtrl.push(ChannelPlan);
  }
}*/

 /*doAlert() {
        let alert = this.alert1.create({
            title: 'Hold on',
            message: 'You are not done with your tasks yet!',
            buttons: ['Ok']
        });
        alert.present(alert);
    }*/







  channel(name,special,apno,date,time,username,telephone,id,email,payment){
    this.navCtrl.push(ChannelPlan,{name,special,apno,date,time,username,telephone,id,email,payment});
  }

  ionViewDidLoad() {
     
    console.log('ionViewDidLoad Search');
  }


  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(Popover);
    popover.present({
      ev: myEvent
    });
  }

 channel1(){
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
