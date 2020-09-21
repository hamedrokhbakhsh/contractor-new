import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppService } from './services/app.service';
import { ToastService } from './services/toast.service';
import {AuthGuard} from './guard/auth.guard';
import {UnAuthGuard} from './guard/un-auth.guard';
import {IpAuthGuard} from './guard/ip-auth.guard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {TokenInterceptorService} from './services/token-interceptor.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ToastService,
    AppService ,
    IpAuthGuard,
    UnAuthGuard ,
    AuthGuard ,
    {
      provide: HTTP_INTERCEPTORS ,
      useClass: TokenInterceptorService ,
      multi: true
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
