import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportCholestrol } from './report-cholestrol';

@NgModule({
  declarations: [
    ReportCholestrol,
  ],
  imports: [
    IonicPageModule.forChild(ReportCholestrol),
  ],
  exports: [
    ReportCholestrol
  ]
})
export class ReportCholestrolModule {}
