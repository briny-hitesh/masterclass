import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesPage } from './courses.page';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLink } from '@angular/router';
import { DataService } from '@core/services/data.service';
import { Course } from '@core/model/course.model';

describe('CoursesPage', () => {
  let component: CoursesPage;
  let fixture: ComponentFixture<CoursesPage>;
  let dataService: DataService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, RouterLink]
    })
    fixture = TestBed.createComponent(CoursesPage);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has course update in component variable', () => {
    dataService.addCourses([
      new Course({
        "id": 1,
        "courseName": "Advanced Machine Learning",
        "author": "Alex Johnson",
        "actualPrice": 1199,
        "currency": "INR",
        "discountPercentage": 15,
        "tags": ["Machine Learning", "Python"]
      })
    ])

    expect(component.courses().length).toBe(1);
  });

  it('should update searchInput', () => {
    component.handleSearch({detail: { value: 'test'}} as any);
    expect(component.searchInput()).toBe('test')
  });

  it('should be search list empty when corse not found based in search params', () => {
    dataService.addCourses([
      new Course({
        "id": 1,
        "courseName": "Advanced Machine Learning",
        "author": "Alex Johnson",
        "actualPrice": 1199,
        "currency": "INR",
        "discountPercentage": 15,
        "tags": ["Machine Learning", "Python"]
      })
    ])
    component.handleSearch({detail: { value: 'test'}} as any);
    expect(component.searchInput()).toBe('test')
    expect(component.courses().length).toBe(0);
  });

  it('should found based in search params by name', () => {
    dataService.addCourses([
      new Course({
        "id": 1,
        "courseName": "Advanced Machine Learning",
        "author": "Alex Johnson",
        "actualPrice": 1199,
        "currency": "INR",
        "discountPercentage": 15,
        "tags": ["Machine Learning", "Python"]
      })
    ])
    component.handleSearch({detail: { value: 'Advanced'}} as any);
    expect(component.searchInput()).toBe('Advanced')
    expect(component.courses().length).toBe(1);
  });

  it('should found based in search params by tag', () => {
    dataService.addCourses([
      new Course({
        "id": 1,
        "courseName": "Advanced Machine Learning",
        "author": "Alex Johnson",
        "actualPrice": 1199,
        "currency": "INR",
        "discountPercentage": 15,
        "tags": ["Machine Learning", "Python"]
      })
    ])
    component.handleSearch({detail: { value: 'Python'}} as any);
    expect(component.searchInput()).toBe('Python')
    expect(component.courses().length).toBe(1);
  });
});
