import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportDiabetic } from './report-diabetic';

@NgModule({
  declarations: [
    ReportDiabetic,
  ],
  imports: [
    IonicPageModule.forChild(ReportDiabetic),
  ],
  exports: [
    ReportDiabetic
  ]
})
export class ReportDiabeticModule {}
