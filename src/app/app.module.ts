import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { NetPage } from '../pages/net/net';
import { HomePage } from '../pages/home/home';
import { ProgramasPage } from '../pages/programas/programas';
import { SintonizarPage } from '../pages/sintonizar/sintonizar';
import { SobrePage } from '../pages/sobre/sobre';
import { VideoPage } from '../pages/video/video';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VideosProvider } from '../providers/videos/videos';


import { ProgramasPageModule } from '../pages/programas/programas.module';
import { SintonizarPageModule } from '../pages/sintonizar/sintonizar.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { VideoPageModule } from '../pages/video/video.module';
import { NetPageModule } from '../pages/net/net.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ProgramasPageModule,
    SintonizarPageModule,
    SobrePageModule,
    VideoPageModule,
    NetPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProgramasPage,
    SintonizarPage,
    SobrePage,
    NetPage,
    VideoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VideosProvider,
    HttpClientModule,
    InAppBrowser
  ]
})
export class AppModule {}
