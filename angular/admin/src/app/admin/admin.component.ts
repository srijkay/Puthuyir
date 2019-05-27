import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  constructor(private router: Router, private _route: ActivatedRoute)  { }

  ngOnInit() {
//this.router.navigate(['/admin/assignments/schoolNewReq']);
   }
}
