import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Call } from './call';

@NgModule({
  declarations: [
    Call,
  ],
  imports: [
   // IonicModule.forChild(Call),
  ],
  exports: [
    Call
  ]
})
export class CallModule {}
