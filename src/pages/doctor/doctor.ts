import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {  AlertController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import {Popover} from '../popover/popover';
import {Nurse} from '../nurse/nurse';
import {Emergency} from '../emergency/emergency';
import {ReportPage} from '../report/report';
import {Contact} from '../contact/contact';
import {Channel} from '../channel/channel';
/**
 * Generated class for the Doctor page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html',
})
export class Doctor {

name:FirebaseListObservable<any>;
picker:any;
doctor:FirebaseListObservable<any>;
public buttonclicked:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public angFire:AngularFire,public alertCtrl: AlertController,public popoverCtrl: PopoverController) {
  this.name=angFire.database.list('/doctor');
//var timevar=document.getElementById(this.picker);
this.doctor = angFire.database.list('/doctor'); 
}

public onButtonClicked(){

  this.buttonclicked=!this.buttonclicked;
}

pickname(name: string ){
  this.doctor = this.angFire.database.list('doctor', {
    query: {
      orderByChild:'name',
      equalTo: name
        
    }
  });
}
presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(Popover);
    popover.present({
      ev: myEvent
    });
  }



updatetime(time){
  let prompt = this.alertCtrl.create({
    title: 'Time',
    message: "Update the time",
    inputs: [
      {
        name: 'time',
        placeholder: time.time,
        type: 'time',
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          let newTime:String=time.time;

          if(data.time !=''){
            newTime=data.time;
          }
          this.doctor.update(time.$key, {
            time: data.time
          });
        }
      }
    ]
  });
  prompt.present();
}



  ionViewDidLoad() {
    console.log('ionViewDidLoad Doctor');
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
