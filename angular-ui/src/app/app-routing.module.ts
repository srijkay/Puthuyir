import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {SchoolRegistrationComponent} from './school-registration/school-registration.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import {SchoolListComponent} from './school-list/school-list.component'
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


