import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { AdminHomeService } from './admin/services/admin-home.service';
import { AccessReviewsComponent } from './admin/access-reviews/access-reviews.component';
import { AdminRoleCheckComponent } from './admin/admin-role-check/admin-role-check.component';
import { HomeComponent } from './admin/home/home.component';
import { NewSchoolAdminCheckComponent } from './admin/new-school-admin-check/new-school-admin-check.component';
import { BenificiaryEditProjectComponent } from './admin/benificiary-edit-project/benificiary-edit-project.component';
import { InititeEmailToDeoComponent } from './admin/initite-email-to-deo/initite-email-to-deo.component';
import { AssignToVolunteerComponent } from './admin/assign-to-volunteer/assign-to-volunteer.component';
import { AdminReviewQuotationComponent } from './admin/admin-review-quotation/admin-review-quotation.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { ReferVolunteerComponent } from './sponsor/refer-volunteer/refer-volunteer.component';
import { SponsorModule } from './sponsor/sponsor.module';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { ApproverModule } from './approver/approver.module';
import { ApproverComponent } from './approver/approver.component';
import { ViewSchoolComponent } from './volunteer/view-school/view-school.component';
import { VolunteerModule } from './volunteer/volunteer.module';
import { PendingapprovalsComponent } from './approver/pending-approvals/pendingapprovals/pendingapprovals.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    loadChildren : './admin/admin.module#AdminModule'
  },
     
     
    {
      path: 'sponsor',
      loadChildren : './sponsor/sponsor.module#SponsorModule'

    },
  
      {
        path: 'approver',
        loadChildren : './approver/approver.module#ApproverModule'
      }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers: [
    AdminHomeService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
