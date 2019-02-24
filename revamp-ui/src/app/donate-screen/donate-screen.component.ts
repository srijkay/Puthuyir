import { Component, OnInit } from '@angular/core';

import {SchoolService} from '../services/school.service';

import {Router} from "@angular/router";

@Component({
  selector: 'app-donate-screen',
  templateUrl: './donate-screen.component.html',
  styleUrls: ['./donate-screen.component.css']
})
export class DonateScreenComponent implements OnInit {

  constructor(private schoolService: SchoolService, private router: Router) { }

  ngOnInit() {
  }

}
