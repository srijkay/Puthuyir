import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { SchoolRegistrationComponent } from './school-registration/school-registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SchoolListComponent } from './school-list/school-list.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {LogoutComponent} from './logout/logout.component';
import {ViewSchoolRegistrationComponent} from './view-school-registration/view-school-registration.component';
import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider ,FacebookLoginProvider} from 'angularx-social-login';
import { SchollregconfirmComponent } from './schollregconfirm/schollregconfirm.component';
import { SchoolsForDonationsComponent } from './schools-for-donations/schools-for-donations.component';
import { DonationSchoolInfoComponent } from './donation-school-info/donation-school-info.component';
import { DonateScreenComponent } from './donate-screen/donate-screen.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { AdminfooterComponent } from './admin/adminfooter/adminfooter.component';
import { AdminsidebarComponent } from './admin/adminsidebar/adminsidebar.component';
import { AdminModule } from './admin/admin.module';
import {AdminhomeComponent} from './admin/adminhome/adminhome.component';
const config = new AuthServiceConfig([
  {

    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com')

  },
  {

    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('258341691532711')
  }

]);


export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SchoolRegistrationComponent,
    PageNotFoundComponent,
    SchoolListComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    LogoutComponent,
    ViewSchoolRegistrationComponent,
    SchollregconfirmComponent,
    RegisterComponent,
    SchoolsForDonationsComponent,
    DonationSchoolInfoComponent,
    DonateScreenComponent,
    PaymentSummaryComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    AdminsidebarComponent,
    AdminhomeComponent

    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    UiModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SocialLoginModule,
    NgbModule.forRoot(),
    AdminModule

  ],

  providers: [
     {
     provide: AuthServiceConfig,
     useFactory: provideConfig
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
