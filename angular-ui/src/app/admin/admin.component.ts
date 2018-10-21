import {Component, OnInit} from '@angular/core';

import {AppDataService} from '../services/app-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
  //styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
  constructor(private appDataService: AppDataService) {
  }
  
}
