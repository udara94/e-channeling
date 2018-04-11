import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import {Popover} from '../popover/popover';
import {Nurse} from '../nurse/nurse';
import {Emergency} from '../emergency/emergency';
import {ReportPage} from '../report/report';
import {Channel} from '../channel/channel';

//import {UserProvider } from '../../providers/user-provider/user-provider';
//import {ChatsProvider} from '../../providers/chats-provider/chats-provider';
//import {AngularFire} from 'angularfire2';
//import {Observable} from 'rxjs/Observable';



/**
 * Generated class for the Contact page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class Contact {
 //chats:Observable<any[]>;
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public popoverCtrl: PopoverController,
  // public chatsProvider: ChatsProvider,
  // public userProvider: UserProvider,
   //public af:AngularFire
   ) {

    /*  this.chatsProvider.getChats()
            .then(chats => {
                this.chats = chats.map(users => {
                    return users.map(user => {
                        user.info = this.af.database.object(`/users/${user.$key}`);
                        return user;
                    });
                });
            });*/
  }

/*openChat(key) {
        this.userProvider.getUid()
        .then(uid => {
            let param = {uid: uid, interlocutor: key};
            this.navCtrl.push(ChatViewPage,param);
        });   
    }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad Contact');
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
