import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewerRoutingModule } from './reviewer-routing.module';
import { ReviewerComponent } from './reviewer.component';

@NgModule({
  declarations: [ReviewerComponent],
  imports: [
    CommonModule,
    ReviewerRoutingModule
  ]
})
export class ReviewerModule { }
