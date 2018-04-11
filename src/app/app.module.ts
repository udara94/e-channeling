import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
 import { DatePickerModule } from 'datepicker-ionic2';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Login } from '../pages/login/login';
import {Register} from '../pages/register/register';
import {Channel} from '../pages/channel/channel';
import {Forgot} from '../pages/forgot/forgot';
import {Search } from '../pages/search/search';
import { Session} from '../pages/session/session';
import { Zone } from '../pages/zone/zone';
import {Cholreport} from '../pages/cholreport/cholreport';
import {Diareport} from '../pages/diareport/diareport';
import {ReportCholestrol} from '../pages/report-cholestrol/report-cholestrol';
import {ReportDiabetic} from '../pages/report-diabetic/report-diabetic';
import {Care } from '../pages/care/care';
import {Nurse} from '../pages/nurse/nurse';
import {Contact} from '../pages/contact/contact';
import {ReportPage} from '../pages/report/report';
import {Call} from '../pages/call/call';
import {Emergencyinfo} from '../pages/emergencyinfo/emergencyinfo';
import {Allergies} from '../pages/allergies/allergies';
import {Medications} from '../pages/medications/medications';
import {Sugeriesandimplants} from '../pages/sugeriesandimplants/sugeriesandimplants';
import {Emergency} from '../pages/emergency/emergency';
import {Availablenurses} from '../pages/availablenurses/availablenurses';
import {Doctor} from '../pages/doctor/doctor';
import {Feedback} from '../pages/feedback/feedback';
import {ChannelPlan} from '../pages/channel-plan/channel-plan';
import {Popover} from '../pages/popover/popover';
import{Profile}from '../pages/profile/profile';
import{History}from '../pages/history/history';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import {  AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';


import {ChartsModule} from 'ng2-charts/charts/charts';
import '../../node_modules/chart.js/dist/Chart.bundle.min.js';

//import { AuthProvider } from '../providers/auth-provider/auth-provider';
//import { ChatsProvider } from '../providers/chats-provider/chats-provider';
//import { UserProvider } from '../providers/user-provider/user-provider';
//import { UtilProvider } from '../providers/utils';

//import {AngularFireModule} from 'angularfire2' ;

export const config = {
     apiKey: "AIzaSyAaAi79gWkEPhE5fvmx5-RNUmy7PDDmMDY",
    authDomain: "medi-869c9.firebaseapp.com",
    databaseURL: "https://medi-869c9.firebaseio.com",
    projectId: "medi-869c9",
    storageBucket: "medi-869c9.appspot.com",
    messagingSenderId: "608267921140"
  };

  const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '554cd7be'
  },
  'push': {
    'sender_id': '608267921140',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#ff0000'
      }
    }
  }
};

//firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Login,
    Register,
    Channel,
    Forgot,
	  Emergency,
    Search,
    Session,
    Zone,
    Cholreport,
    Diareport,
    ReportCholestrol,
    ReportDiabetic,
    Care,
    Nurse,
    Contact,
    ReportPage,
    Call,
    Emergencyinfo,
    Allergies,
    Medications,
    Sugeriesandimplants,
    Availablenurses,
    Doctor,
    Feedback,
    ChannelPlan,
    Popover,
    Profile,
    History,
   
    
   
  ],
  imports: [
    BrowserModule,
     ChartsModule,
    IonicModule.forRoot(MyApp),
     DatePickerModule,
    AngularFireModule.initializeApp(config,myFirebaseAuthConfig),
    CloudModule.forRoot(cloudSettings)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Login,
    Register,
    Channel,
    Forgot,
	  Emergency,
    Search,
    Session,
    Zone,
    Cholreport,
    Diareport,
    ReportCholestrol,
    ReportDiabetic,
    Care,
    Nurse,
    Contact,
    ReportPage,
    Call,
    Emergencyinfo,
    Medications,
    Sugeriesandimplants,
    Allergies,
    Availablenurses,
    Doctor,
    Feedback,
    ChannelPlan,
    Popover,
    Profile,
    History
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireModule ,
     File,
     Transfer,
     FilePath,
     Camera,
    // AuthProvider,
    // ChatsProvider,
     //UserProvider,
    // UtilProvider,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
