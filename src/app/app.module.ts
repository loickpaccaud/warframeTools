import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { EventPage } from '../pages/event/event';
import { AlertPage } from '../pages/alert/alert';
import { SortiePage } from '../pages/sortie/sortie';
import { InvasionPage } from '../pages/invasion/invasion';
import { VoidTraderPage } from '../pages/voidTrader/voidTrader';

import { RiflePage } from '../pages/rifle/rifle';

import { RiflesProvider } from '../providers/rifles/rifles';
import { HomeProvider } from '../providers/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventPage,
    AlertPage,
    SortiePage,
    InvasionPage,
    VoidTraderPage,
    RiflePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventPage,
    AlertPage,
    SortiePage,
    InvasionPage,
    VoidTraderPage,
    RiflePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RiflesProvider,
    HomeProvider
  ]
})
export class AppModule {}
