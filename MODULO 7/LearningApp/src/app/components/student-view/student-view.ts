import { Component, Input } from '@angular/core';
import { Student } from '../../models/StudentM';
import { Course } from '../learning/learning';

@Component({
  selector: 'app-student-view',
  imports: [],
  templateUrl: './student-view.html',
})
export class StudentView {
  @Input() students!: Student[];
}
