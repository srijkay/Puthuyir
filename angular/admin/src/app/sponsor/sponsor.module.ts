import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorRoutingModule } from './sponsor-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReferVolunteerComponent } from './refer-volunteer/refer-volunteer.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from 'angular-admin-lte';
import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { BoxModule, BoxInfoModule as MkBoxInfoModule, BoxSmallModule as MkBoxSmallModule  } from 'angular-admin-lte';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { sponsorConf } from './sponsor.conf';
import { SponsorComponent } from './sponsor.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ReferVolunteerComponent,
    SponsorComponent
  ],
  imports: [
    SponsorRoutingModule,
    CoreModule,
    LayoutModule.forRoot(sponsorConf),
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
  ]
})
export class SponsorModule { }
