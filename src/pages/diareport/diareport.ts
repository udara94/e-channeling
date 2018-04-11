import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { PopoverController } from 'ionic-angular';
import {Popover} from '../popover/popover';
import {Nurse} from '../nurse/nurse';
import {Emergency} from '../emergency/emergency';
import {ReportPage} from '../report/report';
import {Contact} from '../contact/contact';
import {Channel} from '../channel/channel';
/**
 * Generated class for the Diareport page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-diareport',
  templateUrl: 'diareport.html',
})
export class Diareport {

diabet: FirebaseListObservable<any>;
 constructor(public navCtrl: NavController,public af: AngularFire, 
  public alertCtrl: AlertController,
  public popoverCtrl: PopoverController) {


     this.diabet = af.database.list('/diabetic'); }


editreport(diab):void{
	   let prompt = this.alertCtrl.create({
		   title: 'Edit details',
		   message: 'Please do the changers',
		   inputs: [
          {
			   name: 'month',
			   placeholder: diab.month
		       },
		   
		   {
			   name: 'rbs',
			   placeholder: diab.rbs
		   },
		   {
			   name: 'ps',
			   placeholder: diab.ps
		   },
		   {
			   name: 'fbs',
			   placeholder: diab.fbs
		   },
		   {
			   name: 'ogt',
			   placeholder: diab.ogt
		   },
        {
			   name: 'ght',
			   placeholder: diab.ght		   }
		   ],
		   buttons: [
		   {
			   
			   text: "Cancel",
			   handler: data =>{
			   console.log("Cancle clicked");
			   }
			   
		   },{
			   
			   text: "Edit Details",
			   handler: data =>{
          let newMonth:String = diab.month;
				   let newRBS:String = diab.rbs;
				   let newPS:String =  diab.ps;
				  let newFBS:String = diab.fbs;
				   let newOGT:String =diab.ogt;
				    let newGHT:String =diab.ght;
				   
				   if(data.month != ''){
				newMonth = diab.month;
				  }
				   
				    if(data.rbs != ''){
			newRBS = data.rbs;
				   }
				   if( data.ps!= ''){
			newPS =  data.ps;
				   }
				   
				    if(data.fbs != ''){
				newFBS = data.fbs;
				   }
				   
				    if(data.ogt != ''){
			newOGT = data.ogt;
				   }

				    if(data.ght != ''){
			newGHT = data.ght;
				   }

			   this.diabet.update(diab.$key,{
				   
				   month: newMonth,
				  rbs:newRBS,
				   ps: newPS,
				   fbs:  newFBS,
				   ogt: newOGT,
            ght:   newGHT
			   })
			   }
			   
		   }
			]
	   });
	   prompt.present();
   }

 delreport(diabID):void{
	   let prompt = this.alertCtrl.create({
		   title: 'Delete Report',
		   
		   buttons: [
		   {
			   
			   text: "Cancel",
			   handler: data =>{
			   console.log("Cancle clicked");
			   }
			   
		   },{
			   
			   text: "Delete Report",
			   handler: data =>{
				   
			   this.diabet.remove(diabID);
			   }
			   
		   }
			]
	   });
	   prompt.present();
   }


 chartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
 
  chartLabels: string[] = ['January', 'February', 'March', 'April'];
  chartType: string = 'bar';
  chartLegend: boolean = true;
 
  chartData: any[] = [
    { data: [25, 80, 45, 100], label: 'Sugar Level' },
   // { data: [80, 55, 75, 95], label: 'Sugar Level' }
  ];


  ionViewDidLoad() {
    console.log('ionViewDidLoad Diareport');
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
