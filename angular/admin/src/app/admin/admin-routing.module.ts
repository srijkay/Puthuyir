import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AccessReviewsComponent } from './access-reviews/access-reviews.component';
import { AccessReviewService } from './services/access-review.service';
import { AdminHomeService } from './services/admin-home.service';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { AdminRoleCheckService } from './services/admin-role-check.service';
import { AdminRoleCheckComponent } from './admin-role-check/admin-role-check.component';
import { NewSchoolAdminCheckService } from './services/new-school-admin-check.service';
import { BenificiaryEditProjectService } from './services/beneficiary-edit-project.service';
import { AssignToVolunteerService } from './services/assign_to_volunteer_.service';
import { AdminReviewQuotationService } from './services/admin-review-quotation.service';
import { MailService } from './services/mail.service';
import { NewSchoolAdminCheckComponent } from './new-school-admin-check/new-school-admin-check.component';






const routes: Routes = [

  {path: '', component: AdminComponent },

    {path: 'assignments/accessReview', component: AccessReviewsComponent},
    {path: 'assignments/schoolNewReq', component: HomeComponent},
    {path: 'admin_role_check', component: AdminRoleCheckComponent},
    {path: 'admin_role_check/:user', component: AdminRoleCheckComponent},
    {path: 'new_school_admin_check', component: NewSchoolAdminCheckComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    CommonModule,
    Ng2SmartTableModule
  ],
  providers: [
    AccessReviewService,
    AdminHomeService,
    AdminRoleCheckService,
    NewSchoolAdminCheckService,
    BenificiaryEditProjectService,
    AssignToVolunteerService,
    AdminReviewQuotationService,
    MailService
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
