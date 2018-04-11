import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Diareport } from './diareport';

@NgModule({
  declarations: [
    Diareport,
  ],
  imports: [
    IonicPageModule.forChild(Diareport),
  ],
  exports: [
    Diareport
  ]
})
export class DiareportModule {}
