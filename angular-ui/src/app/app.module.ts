import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { SchoolRegistrationComponent } from './school-registration/school-registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { SchoolService } from './services/school.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SchoolListComponent } from './school-list/school-list.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {LogoutComponent} from './logout/logout.component';
import {ViewSchoolRegistrationComponent} from './view-school-registration/view-school-registration.component';


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
    ViewSchoolRegistrationComponent

    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    UiModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [SchoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
