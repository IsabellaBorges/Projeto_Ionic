import { DatabaseService } from './database.service';
import { Http, HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailPageModule } from './movie-detail/movie-detail.module';
import { SQLite } from '@ionic-native/sqlite/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpModule,MovieDetailPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    DatabaseService,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    
  ],
  bootstrap: [AppComponent], 
})
export class AppModule {}
