import { Component } from '@angular/core';
import { LocationStrategy } from "@angular/common";
import { AutoLogoutService } from './services/auto-logout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  constructor(
    private autoLogoutService: AutoLogoutService,
    private locationStrategy: LocationStrategy, 
  ) {
    this.locationStrategy.onPopState(() => {  
      history.pushState(null, null, window.location.href)
    })
  }
}
