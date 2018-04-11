import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ReportCholestrol} from '../report-cholestrol/report-cholestrol';
import {ReportDiabetic} from '../report-diabetic/report-diabetic';
import { PopoverController } from 'ionic-angular';
import {Popover} from '../popover/popover';
import {Nurse} from '../nurse/nurse';
import {Emergency} from '../emergency/emergency';
import {Contact} from '../contact/contact';
import {Channel} from '../channel/channel';

@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {
  
  constructor(public navCtrl: NavController,
  public popoverCtrl: PopoverController) {}
nextPage(){
 
  this.navCtrl.push(ReportCholestrol);

}
nextP1(){
  this.navCtrl.push(ReportDiabetic);

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
