import { Component, Input } from '@angular/core';
import { Course } from '../learning/learning';

@Component({
  selector: 'app-course-view',
  imports: [],
  templateUrl: './course-view.html',
})
export class CourseView { 
  @Input() learning!: Course;
}
