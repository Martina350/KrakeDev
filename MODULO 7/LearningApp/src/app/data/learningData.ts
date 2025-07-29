import { Student } from "../models/StudentM";
import { Course } from "../models/CourseM";

export const learningData: Course = {
  id: 1,
  name: "Primero de Bachillerato",
  students: [
    { id: 1, identification: 201, name: "Peter", surname: "Parker" },
    { id: 2, identification: 202, name: "Miles", surname: "Morales" },
    { id: 3, identification: 203, name: "Gwen", surname: "Stacy" },
    { id: 4, identification: 204, name: "Hobbie", surname: "Brown" }
  ]
};

