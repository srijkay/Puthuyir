import { Component } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {AdminhomeComponent} from './admin/adminhome/adminhome.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppComponent {
  title = 'app';
  isAdmin:boolean = false;
  constructor(private location: Location) {
    console.log(this.location.path());
    var path = this.location.path();
    if (path.indexOf("/admin/") == 0) {
      this.isAdmin = true;
    }
  }
}
