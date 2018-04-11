import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Contact } from './contact';

@NgModule({
  declarations: [
    Contact,
  ],
  imports: [
  //  IonicModule.forChild(Contact),
  ],
  exports: [
    Contact
  ]
})
export class ContactModule {}
