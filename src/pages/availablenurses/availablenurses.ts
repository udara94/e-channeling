import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Nurse} from '../nurse/nurse';
import {Emergency} from '../emergency/emergency';
import {ReportPage} from '../report/report';
import {Contact} from '../contact/contact';
import {Channel} from '../channel/channel';
/**
 * Generated class for the Availablenurses page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-availablenurses',
  templateUrl: 'availablenurses.html',
})
export class Availablenurses {

  books: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController,
	 public alertCtrl: AlertController,
	angFire: AngularFire) {
	 this.books = angFire.database.list('/nurse');
  }

  addnurse():void{
	   let prompt = this.alertCtrl.create({
		   title: 'Add Details',
		   message: 'Pease fill the form',
		   inputs: [
		   {
			   name: 'Name',
			   placeholder: "Add Name"
		   },

		   {
			   name: 'no',
			   placeholder: "Add Contact No"
		   }
		   ],
		   buttons: [
		   {
			   
			   text: "Cancel",
			   handler: data =>{
			   console.log("Cancle clicked");
			   }
			   
		   },{
			   
			   text: "Add details",
			   handler: data =>{
			   this.books.push({
				   
				   Name: data.Name,
				   no: data.no,
				   
			   })
			   }
			   
		   }
			]
	   });
	   prompt.present();
   }

    delnurse(bookID):void{
	   let prompt = this.alertCtrl.create({
		   title: 'Delete contact',
		   
		   buttons: [
		   {
			   
			   text: "Cancel",
			   handler: data =>{
			   console.log("Cancle clicked");
			   }
			   
		   },{
			   
			   text: "Delete contact",
			   handler: data =>{
				   
			   this.books.remove(bookID);
			   }
			   
		   }
			]
	   });
	   prompt.present();
   }

   

  ionViewDidLoad() {
    console.log('ionViewDidLoad Availablenurses');
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
