import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Emergencyinfo } from './emergencyinfo';

@NgModule({
  declarations: [
    Emergencyinfo,
  ],
  imports: [
   // IonicModule.forChild(Emergencyinfo),
  ],
  exports: [
    Emergencyinfo
  ]
})
export class EmergencyinfoModule {}
