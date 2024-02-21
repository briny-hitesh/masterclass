import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, CurrencyPipe, SlicePipe } from '@angular/common';
import { Course } from '@core/model/course.model';

import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { ACTIONS } from '@core/constants/actions.constant';
import { DataService } from '@core/services/data.service';
import { CartIconButtonComponent } from '@core/components/cart-icon-button/cart-icon-button.component';

const imports = [
  IonicModule, CommonModule, CurrencyPipe, SlicePipe, RouterLink, CartIconButtonComponent
]

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ ...imports ],
})
export class HomePage implements OnInit {
  #dataService: DataService = inject(DataService);
  courses = this.#dataService.courses;
  actions = ACTIONS;

  constructor() {}

  ngOnInit(): void {
    this.#dataService.addCourses(
      [new Course({
        "id": 1,
        "courseName": "Advanced Machine Learning",
        "author": "Alex Johnson",
        "actualPrice": 1199,
        "currency": "INR",
        "discountPercentage": 15,
        "tags": ["Machine Learning", "Python"]
      })]
    )
  }
}
