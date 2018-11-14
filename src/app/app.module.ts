import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { NotesProvider } from '../providers/notes/notes';
import { HomeNotesPage } from '../pages/home-notes/home-notes';
import { NotePage } from '../pages/note/note';
import { NoteDetailPage } from '../pages/note-detail/note-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage, 
    HomeNotesPage,
    NotePage,
    NoteDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    HomeNotesPage,
    NotePage,
    NoteDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    NotesProvider
  ]
})
export class AppModule {}
