import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cholreport } from './cholreport';

@NgModule({
  declarations: [
    Cholreport,
  ],
  imports: [
    IonicPageModule.forChild(Cholreport),
  ],
  exports: [
    Cholreport
  ]
})
export class CholreportModule {}
