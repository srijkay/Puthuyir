import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {ReferVolunteerComponent} from './refer-volunteer/refer-volunteer.component';
import { SponsorComponent } from './sponsor.component';

const routes: Routes = [
  {path:'', component: SponsorComponent},
  {path: 'sponsorMngt/referVolunteer', component: ReferVolunteerComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    CommonModule,],
  exports: [RouterModule]
})
export class SponsorRoutingModule { }
