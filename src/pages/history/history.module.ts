import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { History } from './history';

@NgModule({
  declarations: [
    History,
  ],
  imports: [
   // IonicModule.forChild(History),
  ],
  exports: [
    History
  ]
})
export class HistoryModule {}
