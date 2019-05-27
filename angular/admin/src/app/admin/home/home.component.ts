import { Component, OnInit } from '@angular/core';
import {AdminHomeService} from '../services/admin-home.service';
import { School } from '../model/school';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  schoolList: School[];

  constructor(private router: Router, private tservice: AdminHomeService)  { }

  ngOnInit() {
    this
      .tservice
      .getSchoolList()
      .subscribe((data: School[]) => {
        this.schoolList = data;
        console.log(data);
        console.log(JSON.stringify(this.schoolList));
    });
  }
  getSchoolDetailsStatusMessage(status: string): string {
    if (status === 'Initial Admin Check') {
      return 'View Requirements';
    } else if (status === 'Inital Review Complete') {
      return 'Initiate email to DEO';
    } else if (status === 'DEO Approved') {
       return 	'Assign to Volunteer';
    } else if (status === 'Volunteer Accepted') {
      return 'Go to Volunteer';
    } else if (status === 'Volunteer Verfification Complete') {
      return 'Request for Quotation';
    } else if (status === 'Analyse Quotation') {
      return 'Click for an Action';
    } else if (status === 'Enable Quotatoin ReSubmission') {
        return 'Re-assign to Volunteer';
    } else if (status === 'Quotation Approved') {
        return 'View Fund Collection';
    } else if (status === 'Fund Collection Status') {
      return 'Request for Allotment';
    } else if (status === 'Request for Allotment') {
      return 'In Progress';
    } else if (status === 'Fund Allotted') {
      return 'Send Work Order';
    }  else if (status === 'Review Work Completion') {
      return 'Final Review';
    } else if (status === 'Requirement Closed') {
      return 'Complete';
    }  else if (status === 'Rejected Scenarios to be derived') {
      return 'Re-assign to Volunteer';
    } else {
     // return 'Not Available';
      // return 'Assign to Volunteer';
       return 'View Requirements';
      //return 'Initiate email to DEO';
    }
  }
  navigateToDetailsPage(school: School) {

    status = this.getSchoolDetailsStatusMessage(school.status);
    const navigationExtras: NavigationExtras = {
      queryParams: { 'school': JSON.stringify(school) }
    };

    if (status === 'View Requirements') {
      console.log('entered volunteer' + status);
      this.router.navigate(['/admin/new_school_admin_check'], navigationExtras);
    } else if (status === 'Initiate email to DEO') {
      this.router.navigate(['/admin/initiate_email_to_deo'], navigationExtras);
    } else if (status === 'Assign to Volunteer') {
      console.log('entered assign_to_volunteer');
      this.router.navigate(['/admin/assign_to_volunteer'], navigationExtras);
    } else if (status === 'Go to Volunteer') {
      this.router.navigate(['/go_to_volunteer', JSON.stringify(school)]);
    } else if (status ===   'Request for Quotation') {
      this.router.navigate(['/admin/admin_review_quotation', navigationExtras]);
    } else if (status === 'Click for an Action') {
      this.router.navigate(['/click_for_an_action', JSON.stringify(school)]);
    } else if (status ===  'Re-assign to Volunteer') {
      this.router.navigate(['/re-assign_to_Volunteer', JSON.stringify(school)]);
    } else if (status === 'View Fund Collection') {
      this.router.navigate(['/view_fund_collection', JSON.stringify(school)]);
    } else if (status === 'Request for Allotment') {
      this.router.navigate(['/request_for_allotment', JSON.stringify(school)]);
    } else if (status ===  'In Progress') {
      // this.router.navigate(['/', JSON.stringify(school)]);
    } else if (status ===  'Send Work Order') {
      this.router.navigate(['/send_work_order', JSON.stringify(school)]);
    } else if (status === 'Final Review') {
      this.router.navigate(['/final_review', JSON.stringify(school)]);
    } else if (status ===  'Complete') {
      this.router.navigate(['/complete', JSON.stringify(school)]);
    } else if (status === 'Re-assign to Volunteer') {
      this.router.navigate(['/re-assign_to_volunteer', JSON.stringify(school)]);
    } else {}
  }

  getStyleForStatus(status: string): string {
    console.log('status' + status);

    if (status === 'Initial Admin Check' || status === 'DEO Approved' || status === 'Request for Allotment') {
      return 'label label-warning';
    } else if (status === 'Inital Review Complete' || status === 'Volunteer Accepted' || status === 'Fund Collection Status') {
      return 'label label-success';
    } else if (status === 'Volunteer Verfification Complete' || status === 'Analyse Quotation') {
        return 'label label-info';
    }  else if (status === 'Analyse Quotation' || status ===  'Enable Quotatoin ReSubmission' || status === 'Quotation Approved') {
      return 'label label-info';
   } else if (status === 'Fund Allotted' || status === 'Review Work Completion' || status === 'Requirement Closed') {
      return 'label label-success';
    }  else if (status === 'Rejected Scenarios to be derived') {
      return 'label label-danger';
    } else {
      return 'label label-info';
    }
  }
}
