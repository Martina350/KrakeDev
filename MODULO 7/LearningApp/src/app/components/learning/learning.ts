import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Course } from '../../models/CourseM';
import { LearningService } from '../../services/learning.services';
import { StudentView } from "../student-view/student-view";
import { CourseView } from "../course-view/course-view";

@Component({
  selector: 'app-learning',
  imports: [RouterOutlet, StudentView, CourseView],
  templateUrl: './learning.html',
})
export class LearningComponent implements OnInit {
  learning!:Course;
  constructor(private learningService: LearningService) {}
  ngOnInit(): void {
    this.learning = this.learningService.getCourses();
  }
}
export {Course};

