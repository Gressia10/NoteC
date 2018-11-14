import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeNotesPage } from './home-notes';

@NgModule({
  declarations: [
    HomeNotesPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeNotesPage),
  ],
})
export class HomeNotesPageModule {}
