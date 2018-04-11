import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Nurse } from './nurse';

@NgModule({
  declarations: [
    Nurse,
  ],
  imports: [
   // IonicModule.forChild(Nurse),
  ],
  exports: [
    Nurse
  ]
})
export class NurseModule {}
