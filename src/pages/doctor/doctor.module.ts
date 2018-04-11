import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Doctor } from './doctor';

@NgModule({
  declarations: [
    Doctor,
  ],
  imports: [
   // IonicModule.forChild(Doctor),
  ],
  exports: [
    Doctor
  ]
})
export class DoctorModule {}
