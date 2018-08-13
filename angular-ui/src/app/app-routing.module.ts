import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {SchoolRegistrationComponent} from './school-registration/school-registration.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: 'schoolregistration',
    component: SchoolRegistrationComponent
  },{
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


