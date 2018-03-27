import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterSchoolComponent } from './register-school/register-school.component';
import { SchoolService } from './services/school.service';


const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'registerschool', component: RegisterSchoolComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]
@NgModule({
  declarations: [
    AppComponent,
    RegisterSchoolComponent
    
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
