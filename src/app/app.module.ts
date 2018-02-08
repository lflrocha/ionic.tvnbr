import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContatoPage } from '../pages/contato/contato';
import { ProgramacaoPage } from '../pages/programacao/programacao';
import { ProgramasPage } from '../pages/programas/programas';
import { SintonizarPage } from '../pages/sintonizar/sintonizar';
import { SobrePage } from '../pages/sobre/sobre';

import { NetPage } from '../pages/net/net';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContatoPage,
    ProgramacaoPage,
    ProgramasPage,
    SintonizarPage,
    SobrePage,
    NetPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContatoPage,
    ProgramacaoPage,
    ProgramasPage,
    SintonizarPage,
    SobrePage,
    NetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
