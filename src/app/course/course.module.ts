import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CourseComponent],
  declarations: [CourseComponent]
})
export class CourseModule { }
