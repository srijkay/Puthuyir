import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { SchoolRegistrationComponent } from './school-registration/school-registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SchoolService } from './school.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    SchoolRegistrationComponent,
    PageNotFoundComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    UiModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [SchoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
