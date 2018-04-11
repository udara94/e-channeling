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
 * Generated class for the Medications page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-medications',
  templateUrl: 'medications.html',
})
export class Medications {
books: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, angFire: AngularFire,public popoverCtrl: PopoverController) {
	  this.books = angFire.database.list('/medication');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Medications');
  }

   presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(Popover);
    popover.present({
      ev: myEvent
    });
  }
  
  adddrug():void{
	   let prompt = this.alertCtrl.create({
		   title: 'Add details',
		   message: 'Pease add member details',
		   inputs: [
		   {
			   name: 'medicinename',
			   placeholder: "Add medicine name"
		   },
		   {
			   name: 'reason',
			   placeholder: "Add reson"
		   },
		   {
			   name: 'time',
			   placeholder: "Time getting per day"
		   },
		   {
			   name: 'colour',
			   placeholder: "Colour or special symbols in drug"
		   }
		   ],
		   buttons: [
		   {
			   
			   text: "Cancel",
			   handler: data =>{
			   console.log("Cancle clicked");
			   }
			   
		   },{
			   
			   text: "Add ",
			   handler: data =>{
			   this.books.push({
				   
				   medicinename: data.medicinename,
				   reason: data.reason,
				   time: data.time,
				   colour: data.colour
			   })
			   }
			   
		   }
			]
	   });
	   prompt.present();
   }

   
   
   editdrug(book):void{
	   let prompt = this.alertCtrl.create({
		   title: 'Edit details',
		   message: 'Please do the changers',
		   inputs: [
		   
		   {
			   name: 'medicinename',
			   placeholder: book.medicinename
		   },
		   {
			   name: 'reason',
			   placeholder: book.reason
		   },
		   {
			   name: 'time',
			   placeholder: book.time
		   },
		   {
			   name: 'colour',
			   placeholder: book.colour
		   }
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
				   let newName:String = book.medicinename;
				   let newCon:String = book.reason;
				  let newtime:String = book.time;
				   let newcolour:String = book.colour;
				   
				   
				   if(data.medicinename != ''){
					newName = data.medicinename;
				   }
				   
				    if(data.reason != ''){
					newCon = data.reason;
				   }
				   if(data.time != ''){
					newtime = data.time;
				   }
				   
				    if(data.colour != ''){
					newcolour = data.colour;
				   }
				   
			   this.books.update(book.$key,{
				   
				   medicinename: newName,
				   reason: newCon,
				    time: newtime,
				   colour: newcolour
				   
			   })
			   }
			   
		   }
			]
	   });
	   prompt.present();
   }
   
   
   deldrug(bookID):void{
	   let prompt = this.alertCtrl.create({
		   title: 'Delete Drug',
		   
		   buttons: [
		   {
			   
			   text: "Cancel",
			   handler: data =>{
			   console.log("Cancle clicked");
			   }
			   
		   },{
			   
			   text: "Delete Drug",
			   handler: data =>{
				   
			   this.books.remove(bookID);
			   }
			   
		   }
			]
	   });
	   prompt.present();
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
