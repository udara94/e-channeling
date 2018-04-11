import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Medications } from './medications';

@NgModule({
  declarations: [
    Medications,
  ],
  imports: [
  //  IonicModule.forChild(Medications),
  ],
  exports: [
    Medications
  ]
})
export class MedicationsModule {}
