import { Component, OnInit } from '@angular/core';
import { AccessReviewService } from '../services/access-review.service';
import { User } from '../model/user';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-access-reviews',
  templateUrl: './access-reviews.component.html',
  styleUrls: ['./access-reviews.component.css']
})
export class AccessReviewsComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private tservice: AccessReviewService) {}

  ngOnInit() {
    this
      .tservice
      .getAcessReviewList()
      .subscribe((data: User[]) => {
        this.users = data;
        console.log(data);
        console.log(JSON.stringify(this.users));
    });
  }

  public navigateToAdminroleCheck(user: User) {
    this.router.navigate(['/admin/admin_role_check', JSON.stringify(user)]);
  }


  getStyleForStatus(status: string): string {
    console.log('status' + status);

    if (status === 'Initial Admin Check') {
      return 'label label-warning';
    } else if (status === 'Access Complete') {
      return 'label label-success';
    }  else if (status === 'Rejected') {
      return 'label label-danger';
    } else {
      return 'label label-info';
    }
  }


}
