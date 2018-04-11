import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ChannelPlan } from './channel-plan';

@NgModule({
  declarations: [
    ChannelPlan,
  ],
  imports: [
   // IonicModule.forChild(ChannelPlan),
  ],
  exports: [
    ChannelPlan
  ]
})
export class ChannelPlanModule {}
