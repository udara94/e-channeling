import { Component } from '@angular/core';
import { IonicPage,NavParams } from 'ionic-angular';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Cholreport} from '../cholreport/cholreport';
import {OnInit} from "@angular/core";
import { PopoverController } from 'ionic-angular';
import {Popover} from '../popover/popover';
import {Nurse} from '../nurse/nurse';
import {Emergency} from '../emergency/emergency';
import {ReportPage} from '../report/report';
import {Contact} from '../contact/contact';
import {Channel} from '../channel/channel';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
/**
 * Generated class for the ReportCholestrol page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-report-cholestrol',
  templateUrl: 'report-cholestrol.html',
})

export class ReportCholestrol {
month:any;
blood:any;
ldl:any;
hdl:any;
tryg:any;

 chol:FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,
   public alertCtrl: AlertController,
    angFire: AngularFire,
    public popoverCtrl: PopoverController) 
{

    this.chol=angFire.database.list('/chol');

  }

  
reportnext(){
     this.navCtrl.push(Cholreport);
  }

  
 submit(month,blood,ldl,hdl,tryg){

    {
        
      this.chol.push({

     month:month,
     blood:blood,
     ldl:ldl,
     hdl:hdl,
     tryg:tryg,
  
      }
    )


  
  }

let alert = this.alertCtrl.create({
    title: 'Data added successfully',
    
  });
 
 alert.present();
   
   }

 clear(){
  this.blood="";
  this.month="";
  this.hdl="";
  this.ldl="";
  this.tryg="";

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
 ionViewDidLoad() {
    console.log('ionViewDidLoad ReportCholestrol');
 
 }}

 