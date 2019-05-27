import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApproverRoutingModule } from './approver-routing.module';
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
import { ApproverComponent } from './approver.component';
import { approverConf } from './approver.conf';
import { PendingapprovalsComponent } from './pending-approvals/pendingapprovals/pendingapprovals.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ApproverComponent,
    PendingapprovalsComponent
  ],
  imports: [
    CommonModule,
    ApproverRoutingModule,
    CoreModule,
    LayoutModule.forRoot(approverConf),
    BoxModule,
    CoreModule,
    LoadingPageModule,
    MaterialBarModule,
    CommonModule,
    BoxModule,
    MkBoxSmallModule,
    MkBoxInfoModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,

  ]
})
export class ApproverModule { }
