import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Availablenurses } from './availablenurses';

@NgModule({
  declarations: [
    Availablenurses,
  ],
  imports: [
    //IonicModule.forChild(Availablenurses),
  ],
  exports: [
    Availablenurses
  ]
})
export class AvailablenursesModule {}
