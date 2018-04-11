import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import {Popover} from '../popover/popover';
import {Nurse} from '../nurse/nurse';
import {Emergency} from '../emergency/emergency';
import {ReportPage} from '../report/report';
import {Contact} from '../contact/contact';
import {Channel} from '../channel/channel';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
/**
 * Generated class for the Cholreport page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cholreport',
  templateUrl: 'cholreport.html',
})
export class Cholreport {
cholo: FirebaseListObservable<any>;

  //cholo:any = 0;

 //chartOptions: any = {
  //  scaleShowVerticalLines: false,
 //   responsive: true
//  };
 
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public popoverCtrl: PopoverController,
   public af: AngularFire,
   public alertCtrl: AlertController) {

     this.cholo = af.database.list('/chol'); 
  }

  chartLabels: string[] = ['January', 'February', 'March', 'April'];
  chartType: string = 'bar';
  chartLegend: boolean = true;


   chartData: any[] = [
    { data: [23, 45, 67, 88], label: 'HDL Level' },
 { data: [32, 41, 55, 23], label: 'LDL Level'}
  ];


  ionViewDidLoad() {
    console.log('ionViewDidLoad Cholreport');
  }

  editreport(cho):void{
	   let prompt = this.alertCtrl.create({
		   title: 'Edit details',
		   message: 'Please do the changers',
		   inputs: [
          {
			   name: 'month',
			   placeholder: cho.month
		       },
		   
		   {
			   name: 'blood',
			   placeholder: cho.blood
		   },
		   {
			   name: 'hdl',
			   placeholder: cho.hdl
		   },
		   {
			   name: 'ldl',
			   placeholder: cho.ldl
		   },
		   {
			   name: 'tryg',
			   placeholder: cho.tryg
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
          let newMonth:String = cho.month;
				   let newTotal:String = cho.blood;
				   let newHDL:String =  cho.hdl;
				  let newLDL:String = cho.ldl;
				   let newTry:String = cho.tryg;
				   
				   
				   if(data.month != ''){
				newMonth = data.month;
				  }
				   
				    if(data.blood != ''){
				newTotal = data.blood;
				   }
				   if( data.hdl != ''){
				newHDL =  data.hdl;
				   }
				   
				    if(data.ldl != ''){
				newLDL = data.ldl;
				   }
				   
				    if(data.tryg != ''){
			newTry = data.tryg;
				   }
			   this.cholo.update(cho.$key,{
				   
				   month: newMonth,
				  blood: newTotal,
				   hdl: newHDL,
				   ldl:  newLDL,
				   tryg:  newTry
			   })
			   }
			   
		   }
			]
	   });
	   prompt.present();
   }


    delreport(choID):void{
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
				   
			   this.cholo.remove(choID);
			   }
			   
		   }
			]
	   });
	   prompt.present();
   }

   /*
message(hdl)
{
  if(this.chol.hdl > 5)
  console.log("Too dangerous");
  else
  console.log("Not danger");
}

*/

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
