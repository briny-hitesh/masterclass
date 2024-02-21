import { Injectable, signal } from "@angular/core";
import { Course } from "@core/model/course.model";

@Injectable({
    providedIn: 'root',
})

export class DataService {
    courses = signal<Course[]>([]);

    addCourses(courses: Course[]) {
        this.courses.update(() => courses);
    }

}