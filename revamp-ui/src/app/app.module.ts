import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterSchoolComponent } from './register-school/register-school.component';
import { SchoolService } from './services/school.service';
import { NewlyAddedSchoolsComponent } from './newly-added-schools/newly-added-schools.component';


const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'registerschool', component: RegisterSchoolComponent },
  { path: 'newlyaddedschools', component: NewlyAddedSchoolsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]
@NgModule({
  declarations: [
    AppComponent,
    RegisterSchoolComponent,
    NewlyAddedSchoolsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SchoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
