import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Push, PushToken} from '@ionic/cloud-angular';
import * as firebase from 'firebase';

 
import { HomePage } from '../pages/home/home';
import {Channel} from '../pages/channel/channel';
import {Emergency} from '../pages/emergency/emergency';
import {Nurse} from '../pages/nurse/nurse';
import {Contact} from '../pages/contact/contact';
import {ReportPage} from '../pages/report/report';
import {Availablenurses} from '../pages/availablenurses/availablenurses';
import {Doctor} from '../pages/doctor/doctor';
import {Feedback} from '../pages/feedback/feedback';

//import { Zone } from '../pages/zone/zone';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  pages2:any;

  constructor(public platform: Platform,
   public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public push: Push) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title:'Home', component: HomePage },
      { title:'Channel',component: Channel },
      {title:'Reserve Nurse',component:Nurse},
      {title:'Keep Contact',component:Contact},
      {title:'Report Analysis',component:ReportPage},
      { title:'Emergency', component:Emergency},
      { title:'Available Nurses', component:Availablenurses},


     
    ];

    this.pages2={

      homepage:HomePage,
      channel:Channel,
      nurse:Nurse,
      contact:Contact,
      report:ReportPage,
      emergency:Emergency,
      availablenurses:Availablenurses, 
      doctor:Doctor,   
      feedback:Feedback  
    }

this.push.register().then((t: PushToken) => {
        return this.push.saveToken(t);
      }).then((t: PushToken) => {
        console.log('Token saved:', t.token);
      });

this.push.rx.notification()
      .subscribe((msg) => {
        console.log('I received awesome push: ' + msg);
      });
  
}

  


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
