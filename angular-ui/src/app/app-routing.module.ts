import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {SchoolRegistrationComponent} from './school-registration/school-registration.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SchoolListComponent} from './school-list/school-list.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {LogoutComponent} from './logout/logout.component';
import {ViewSchoolRegistrationComponent} from './view-school-registration/view-school-registration.component'
import {SchollregconfirmComponent } from './schollregconfirm/schollregconfirm.component';
import {SchoolsForDonationsComponent } from './schools-for-donations/schools-for-donations.component';
import {DonationSchoolInfoComponent} from './donation-school-info/donation-school-info.component';
import {DonateScreenComponent} from './donate-screen/donate-screen.component';
import {PaymentSummaryComponent} from './payment-summary/payment-summary.component';
import {PaymentConfirmationComponent} from './payment-confirmation/payment-confirmation.component';
import {} from './schools-for-donations/schools-for-donations.component';
const routes: Routes = [
  {
    path: 'schoolregistration',
    component: SchoolRegistrationComponent
  },
  {
    path: 'schoollist',
    component: SchoolListComponent
  },
  {

    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'viewSchoolReg',
    component: ViewSchoolRegistrationComponent

  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'schoolRegConfirm',
    component: SchollregconfirmComponent
  },{
    path: 'schoolsForDonations',
    component: SchoolsForDonationsComponent
  },
  {
    path: 'donationSchoolInfo',
    component: DonationSchoolInfoComponent
  },
  {
    path: 'donateScreen',
    component: DonateScreenComponent
  },
  {
    path: 'paymentSummary',
    component: PaymentSummaryComponent
  },
  {
    path: 'paymentConfirmation',
    component: PaymentConfirmationComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
 ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]

})
export class AppRoutingModule { }
