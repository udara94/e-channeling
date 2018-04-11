import { Component ,ViewChild, OnInit, ElementRef} from '@angular/core';
import { NavController, NavParams ,Slides,Content,AlertController} from 'ionic-angular';
import {Search} from '../search/search';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { PopoverController } from 'ionic-angular';
import {Popover} from '../popover/popover';
import { LoadingController } from 'ionic-angular';
import {Nurse} from '../nurse/nurse';
import {Emergency} from '../emergency/emergency';
import {ReportPage} from '../report/report';
import {Contact} from '../contact/contact';


@Component({
  selector: 'page-channel',
  templateUrl: 'channel.html',

 
})
export class Channel {

public ionScroll;
public showButton = false;


 @ViewChild('mySlider') slider: Slides;
  selectedSegment: string;
  slides: any;
    
doctor: any=0;
content:any;
myDate: String = new Date().toISOString();
Date:String;

  constructor(public navCtrl: NavController,
   public af: AngularFire,
   public popoverCtrl: PopoverController,
   public loadingCtrl: LoadingController,
   public myElement: ElementRef,
   public alertCtrl: AlertController) {

   this.doctor = af.database.list('/doctor'); 

   var temp=this;
   
   this.presentLoading();

   this.selectedSegment = 'first';
    this.slides = [
      {
        id: "first",
        title: "First Slide"
      },
      {
        id: "second",
        title: "Second Slide"
      },
      {
        id: "third",
        title: "Third Slide"
      }
    ];

}


compairedate(myDate,Date){
 
 if(this.myDate>this.Date){
 
  let alert = this.alertCtrl.create({
    title: 'Invalid Date',
    subTitle: 'Please select a valid date',
    buttons: ['Ok']
  });
  alert.present();
   
}

}

 

  onSegmentChanged(segmentButton) {
    console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this.slides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.slider.slideTo(selectedIndex);
  }

  
   onSlideChanged(slider) {
      console.log('Slide changed');
      const currentSlide = this.slides[slider.activeIndex];
      this.selectedSegment = currentSlide.id;
  }

search(){
this.pickspecial;
}

presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(Popover);
    popover.present({
      ev: myEvent
    });
  }

pickspecial(special: string){
  this.doctor = this.af.database.list('doctor', {
    query: {
      orderByChild:'special',
      equalTo: special
      

      
    }
    
  });
   
}
pickname(name: string ){
  this.doctor = this.af.database.list('doctor', {
    query: {
      orderByChild:'name',
      equalTo: name
        
    }
  });
}

pickdate(date: string ){
  this.doctor = this.af.database.list('doctor', {
    query: {
      orderByChild:'date',
      equalTo: date
        
    }
  });
}

 presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }



  /*add(name,special,date){

    {
        
      this.doctor.push({

      name:name,
      special:special,
      date:date,
    

    })
    
    
  }
  }*/
channel1(person){

  this.navCtrl.push(Search,person);
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
    console.log('ionViewDidLoad Channel');
  }

  

}
