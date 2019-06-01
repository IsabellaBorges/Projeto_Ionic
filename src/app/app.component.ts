import { DatabaseService } from './database.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TabsPage } from './tabs/tabs.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent { 
  rootPage: any = null;

  constructor(
    dbservice:DatabaseService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp(); 
    dbservice.createDatabase().then(() => {
          
      this.openTabsPage(splashScreen);

       alert('Deu tudo certo! Banco ok');
    })
    .catch(()=> {
       alert('Banco não foi criado');      
           
      this.openTabsPage(splashScreen);
     
    });
  


    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
     
      this.splashScreen.hide();
    });
  }

  public openTabsPage(splashScreen: SplashScreen) {
    splashScreen.hide();
    this.rootPage = TabsPage;
}
}


