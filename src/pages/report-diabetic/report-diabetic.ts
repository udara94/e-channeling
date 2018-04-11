import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Diareport} from '../diareport/diareport';
import { PopoverController } from 'ionic-angular';
import {Popover} from '../popover/popover';
import {Nurse} from '../nurse/nurse';
import {Emergency} from '../emergency/emergency';
import {ReportPage} from '../report/report';
import {Contact} from '../contact/contact';
import {Channel} from '../channel/channel';
/**
 * Generated class for the ReportDiabetic page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-report-diabetic',
  templateUrl: 'report-diabetic.html',
})
export class ReportDiabetic {

  month:any;
  rbs:any;
  ps:any;
  fbs:any;
  ogt:any;
  ght:any;

diabetic:FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,
   public alertCtrl: AlertController, 
   angFire: AngularFire,
   public popoverCtrl: PopoverController) {

    this.diabetic=angFire.database.list('/diabetic');
  }

  
  

nextChart(){ 
  this.navCtrl.push(Diareport);
}


submit(month,rbs,ps,fbs,ogt,ght){

    {
        
      this.diabetic.push({

    month:month,
     rbs:rbs,
     ps:ps,
     fbs:fbs,
     ogt:ogt,
     ght:ght,
  

      }
      )      

    let alert = this.alertCtrl.create({
    title: 'Data added successfully',
    
  });
  alert.present();
   
   }
}
    clear()
    {
      this.month="";
      this.rbs="";
      this.fbs="";
      this.ps="";
      this.ogt="";
      this.ght="";
      
    }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportDiabetic');
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
