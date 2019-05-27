import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerRoutingModule } from './volunteer-routing.module';
import { VolunteerComponent } from './volunteer.component';
import { ViewSchoolComponent } from './view-school/view-school.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from 'angular-admin-lte';
import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { BoxModule, BoxInfoModule as MkBoxInfoModule, BoxSmallModule as MkBoxSmallModule  } from 'angular-admin-lte';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { volunteerConf } from './volunteer.conf';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    VolunteerComponent,
    ViewSchoolComponent
  ],

  imports: [
    CommonModule,
    VolunteerRoutingModule,
    CoreModule,
    LayoutModule.forRoot(volunteerConf),
    BoxModule,
    CoreModule,
    LoadingPageModule,
    MaterialBarModule,
    MkBoxSmallModule,
    MkBoxInfoModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ]
})
export class VolunteerModule { }
