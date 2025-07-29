import { Injectable } from "@angular/core";
import { learningData } from "../data/learningData";
import { Course } from "../models/CourseM";

@Injectable({
  providedIn: 'root'
})
export class LearningService {
    private course: Course = learningData;
    constructor() {}
    getCourses(): Course {
        return this.course;
    }   
}