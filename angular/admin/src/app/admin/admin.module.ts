import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LayoutModule } from 'angular-admin-lte';
import { adminLteConf } from './admin-lte.conf';

import { CoreModule } from './core/core.module';
import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { BoxModule, BoxInfoModule as MkBoxInfoModule, BoxSmallModule as MkBoxSmallModule  } from 'angular-admin-lte';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccessReviewsComponent } from './access-reviews/access-reviews.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminRoleCheckComponent } from './admin-role-check/admin-role-check.component';
import { HomeComponent } from './home/home.component';
import { NewSchoolAdminCheckComponent } from './new-school-admin-check/new-school-admin-check.component';
import { InititeEmailToDeoComponent } from './initite-email-to-deo/initite-email-to-deo.component';
import { BenificiaryEditProjectComponent } from './benificiary-edit-project/benificiary-edit-project.component';
import { AssignToVolunteerComponent } from './assign-to-volunteer/assign-to-volunteer.component';
import { AdminReviewQuotationComponent } from './admin-review-quotation/admin-review-quotation.component';
import {ModalModule} from "ngx-modal";

@NgModule({
  declarations: [
    AdminComponent,
    AccessReviewsComponent,
    HeaderComponent,
    FooterComponent,
    AdminRoleCheckComponent,
    HomeComponent,
    NewSchoolAdminCheckComponent,
    InititeEmailToDeoComponent,
    BenificiaryEditProjectComponent,
    AssignToVolunteerComponent,
    AdminReviewQuotationComponent
  ],
  imports: [
    AdminRoutingModule,
    LayoutModule.forRoot(adminLteConf),
    BoxModule,
    CoreModule,
    LoadingPageModule,
    MaterialBarModule,
    CommonModule,
    BoxModule,
    MkBoxSmallModule,
    MkBoxInfoModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule
  ]
})
export class AdminModule { }
