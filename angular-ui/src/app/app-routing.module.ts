import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {SchoolRegistrationComponent} from './school-registration/school-registration.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SchoolListComponent} from './school-list/school-list.component';

import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {LogoutComponent} from './logout/logout.component';
import {ViewSchoolRegistrationComponent} from './view-school-registration/view-school-registration.component'

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


