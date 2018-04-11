import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Care } from './care';

@NgModule({
  declarations: [
    Care,
  ],
  imports: [
    //IonicModule.forChild(Care),
  ],
  exports: [
    Care
  ]
})
export class CareModule {}
