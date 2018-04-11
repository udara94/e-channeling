import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Feedback } from './feedback';

@NgModule({
  declarations: [
    Feedback,
  ],
  imports: [
  //  IonicModule.forChild(Feedback),
  ],
  exports: [
    Feedback
  ]
})
export class FeedbackModule {}
