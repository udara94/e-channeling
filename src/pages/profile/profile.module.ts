import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Profile } from './profile';

@NgModule({
  declarations: [
    Profile,
  ],
  imports: [
    //IonicModule.forChild(Profile),
  ],
  exports: [
    Profile
  ]
})
export class ProfileModule {}
