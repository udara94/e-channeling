import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Allergies } from './allergies';

@NgModule({
  declarations: [
    Allergies,
  ],
  imports: [
  //  IonicModule.forChild(Allergies),
  ],
  exports: [
    Allergies
  ]
})
export class AllergiesModule {}
