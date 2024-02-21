import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ROUTES } from '@core/constants/routes.constant';
import { CoursesService } from '@core/services/courses.service';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss'],
    standalone: true,
    imports: [IonicModule]
})
export class TabsPage implements OnInit {
  private coursesService: CoursesService = inject(CoursesService);

  readonly routes: Array<{
    name: string;
    label: string;
    url: string;
    icon: string;
  }> = [
    {
      name: ROUTES.HOME,
      label: 'Home',
      url: `/${ROUTES.TABS}/${ROUTES.HOME}`,
      icon: 'home',
    },
    {
      name: ROUTES.COURSES,
      label: 'Courses',
      url: `/${ROUTES.TABS}/${ROUTES.COURSES}`,
      icon: 'book',
    },
    {
      name: ROUTES.WISHLIST,
      label: 'Wishlist',
      url: `/${ROUTES.TABS}/${ROUTES.WISHLIST}`,
      icon: 'bookmark',
    },
    {
      name: ROUTES.PROFILE,
      label: 'Profile',
      url: `/${ROUTES.TABS}/${ROUTES.PROFILE}`,
      icon: 'person',
    },
  ];

  ngOnInit(): void {
      this.coursesService.getCourses();
  }
}
