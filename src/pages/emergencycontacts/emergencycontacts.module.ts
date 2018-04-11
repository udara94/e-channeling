import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Emergencycontacts } from './emergencycontacts';

@NgModule({
  declarations: [
    Emergencycontacts,
  ],
  imports: [
    //IonicModule.forChild(Emergencycontacts),
  ],
  exports: [
    Emergencycontacts
  ]
})
export class EmergencycontactsModule {}
