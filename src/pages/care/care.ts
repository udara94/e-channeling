import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import {Popover} from '../popover/popover';
import {Nurse} from '../nurse/nurse';
import {Emergency} from '../emergency/emergency';
import {ReportPage} from '../report/report';
import {Contact} from '../contact/contact';
import {Channel} from '../channel/channel';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/**
 * Generated class for the Care page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-care',
  templateUrl: 'care.html',
})
export class Care {


who:any="";
age:any="";
gender:any="";
car:any="";
place:any="";
date1:String = new Date().toISOString();
date2:String;
need:any="";

  care:FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public popoverCtrl: PopoverController,
   angFire: AngularFire,
   public alertCtrl: AlertController) {

     this.care=angFire.database.list('/care');

  }

 presentPopover(myEvent) {

    let popover = this.popoverCtrl.create(Popover);
    popover.present({
      ev: myEvent
    });
  }

clear(){
    
      this.who='';
      this.age='';
      this.gender='';
      this.car='';
      this.place='';
      this.date1='';
      this.date2='';
      this.need='';

}


submit(who,age,gender,car,place,date1,date2,need){

    {
        
      this.care.push({

     who:who,
     age:age,
     gender:gender,
     care:car,
     place:place,
     date1:date1,
     date2:date2,
     need:need,
     
    

    })

  let alert = this.alertCtrl.create({
  title: 'Completed',
  subTitle: 'Successfully Submited ',
  buttons: ['Ok']
  });
  alert.present();
    
    
  }
}

compairedate(date1,date2){
 
 if(this.date1>this.date2){
 
  let alert = this.alertCtrl.create({
    title: 'Invalid Date',
    subTitle: 'Please select a valid date',
    buttons: ['Ok']
  });
  alert.present();
   
}
else{
  if(this.date1>this.date2){

    this.clear;
  }
else{
  this.submit;
}
}

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Care');
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
