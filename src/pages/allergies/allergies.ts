import { Component } from '@angular/core';
import { IonicPage,  NavParams } from 'ionic-angular';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Nurse} from '../nurse/nurse';
import {Emergency} from '../emergency/emergency';
import {ReportPage} from '../report/report';
import {Contact} from '../contact/contact';
import {Channel} from '../channel/channel';
/**
 * Generated class for the Allergies page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-allergies',
  templateUrl: 'allergies.html',
})
export class Allergies {
books: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, angFire: AngularFire) {
	   this.books = angFire.database.list('/allergies');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Allergies');
  }
editall(book):void{
	   let prompt = this.alertCtrl.create({
		   title: 'Edit details',
		   message: 'Please do the changers',
		   inputs: [
		   {
			   name: 'food',
			   placeholder: book.food
		   },
		   
		   {
			   name: 'symptoms',
			   placeholder: book.symptoms
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
				   let newName:String = book.food;
				   let newCon:String = book.symptoms;
				  
				   
				   
				   if(data.food != ''){
					newName = data.food;
				   }
				   
				    if(data.symptoms != ''){
					newCon = data.symptoms;
				   }
				   
			   this.books.update(book.$key,{
				   
				   food: newName,
				   symptoms: newCon
				   
			   })
			   }
			   
		   }
			]
	   });
	   prompt.present();
   }
   
   addal():void{
	   let prompt = this.alertCtrl.create({
		   title: 'Add details',
		   message: 'Pease add member details',
		   inputs: [
		   {
			   name: 'food',
			   placeholder: "Add allergies food or item"
		   },
		   {
			   name: 'symptoms',
			   placeholder: "Add symptoms"
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
				   
				   food: data.food,
				   symptoms: data.symptoms
			   })
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
