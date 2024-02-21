import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule, CurrencyPipe, SlicePipe } from '@angular/common';
import { bookmarkOutline, bookmark, cart, notifications } from 'ionicons/icons';
import { Course } from '@core/model/course.model';

import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { ACTIONS } from '@core/constants/actions.constant';
import { addIcons } from 'ionicons';
import { DataService } from '@core/services/data.service';

const imports = [
  IonicModule, CommonModule, CurrencyPipe, SlicePipe, RouterLink,
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

  constructor() {
    addIcons({ bookmarkOutline, bookmark, cart, notifications })
  }

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
