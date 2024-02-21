import { Injectable, inject } from "@angular/core";
import { DataService } from "./data.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Course } from "@core/model/course.model";

@Injectable({
    providedIn: 'root',
})

export class CoursesService {

    #http: HttpClient = inject(HttpClient);
    #dataService: DataService = inject(DataService);
    #baseUrl: string = environment.API_POINT;

    

    getCourses(): void {
        this.#http.get(`${this.#baseUrl}data/data.json`).subscribe(courses => {
            this.#dataService.addCourses((courses as Course[]).map(course => {
                return new Course(course);
            }));
        });
    }
}