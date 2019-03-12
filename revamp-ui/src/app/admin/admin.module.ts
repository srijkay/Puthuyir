import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminfooterComponent } from './adminfooter/adminfooter.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminfooterComponent, AdminheaderComponent, AdminhomeComponent],
  exports: [AdminfooterComponent,AdminheaderComponent]
})
export class AdminModule { }
