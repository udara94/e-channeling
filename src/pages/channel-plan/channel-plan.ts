import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
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
 * Generated class for the ChannelPlan page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-channel-plan',
  templateUrl: 'channel-plan.html',
})
export class ChannelPlan {

name : any = "";
special:any="";
date:any="";
apno:number;
time:any="";
payment:any="";

username:any="";
id:any="";
telephone:number;
email:any="";
Alert:any;


doctor:FirebaseListObservable<any>;
history:FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public angFire:AngularFire,
   public alertCtrl: AlertController,
   public popoverCtrl: PopoverController,
   public toastCtrl: ToastController) {

      this.history=angFire.database.list('/history');

 this.name = navParams.get('name');
 this.special =navParams.get('special');
 this.date=navParams.get('date');
 this.time=navParams.get('time');
 this.apno=navParams.get('apno');
 this.payment=navParams.get('payment');

  this.username=navParams.get('username');
  this.id=navParams.get('id');
  this.telephone=navParams.get('telephone');
  this.email=navParams.get('email');

this.doctor = angFire.database.list('/doctor'); 


 
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(Popover);
    popover.present({
      ev: myEvent
    });
  }

  presentToast() {

 let alert = this.alertCtrl.create({
    title: 'Notice',
    subTitle: 'From this confirmation you will chanel a doctor',
    buttons: [
      {
        text:"Cancel",
         handler: data =>{
			   console.log("Cancle clicked");
         }
      },{
        text:"OK",
         handler: data =>{
          
    let toast = this.toastCtrl.create({
      message: 'You successfully channel a doctor',
      duration: 3000
    });
    toast.present();

         }
        
      }
      ]
  });
  alert.present();
   
}

addHistory(name,apno,date,time){

    {
        
      this.history.push({

    name:name,
    apno:apno,
     data:date,
     time:time,
      }
      )      

   }
}

  pickname(name:string ){
  this.doctor = this.angFire.database.list('doctor', {
    query: {
      orderByChild:'name',
      equalTo: name
        
    }
  });
}


updateapno(apno){
   
 
 let newTime:String=apno.apno;

this.doctor = this.angFire.database.list('/doctor'); 
 var apno=apno+1;      
this.doctor.update(apno.$key, {apno});
 alert(apno);       
 

}


updateappno(apno:number){
/*this.doctor = this.angFire.database.list('/doctor');

  this.doctor.$ref.once('value')
  .then(snapshot => {
      let obj = snapshot.val()
      this.doctor.update({
        apno:obj.apno+1,
      
      })
  })
*/
}

addtime(){

  alert(this.time);
  var newtime=(this.time)+33;
  alert(newtime);
}

presentalert(apno){

  let prompt = this.alertCtrl.create({
    title:'Appointment confirmation',
    message:'your appointment number is ' ,
     inputs: [
      {
        name: 'apno',
        placeholder: apno.apno,
        type: 'number',
      },
    ],
    buttons:[
      {
        text:'Cancel',
        handler:data=>{
          console.log('Cancel clicked');
        }
      },
      {
        text:'OK',
        

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





 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelPlan');
  }



}
