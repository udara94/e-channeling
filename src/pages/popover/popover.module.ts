import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Popover } from './popover';

@NgModule({
  declarations: [
    Popover,
  ],
  imports: [
  //  IonicModule.forChild(Popover),
  ],
  exports: [
    Popover
  ]
})
export class PopoverModule {}
