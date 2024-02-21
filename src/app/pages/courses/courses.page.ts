import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { IonicModule, SearchbarCustomEvent } from '@ionic/angular';
import { CartIconButtonComponent } from '@core/components/cart-icon-button/cart-icon-button.component';
import { WishlistIconButtonComponent } from '@core/components/wishlist-icon-button/wishlist-icon-button.component';
import { DataService } from '@core/services/data.service';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.page.html',
    styleUrls: ['./courses.page.scss'],
    standalone: true,
    imports: [IonicModule, CurrencyPipe, WishlistIconButtonComponent, CartIconButtonComponent],
})
export class CoursesPage {

  searchInput = signal<string>('');

  #dataService: DataService = inject(DataService);
  
  courses = computed(() => {
    if (this.searchInput()) { 
      return this.#dataService.courses().filter((course) => {
        return course.courseName.includes(this.searchInput()) || course.tags.includes(this.searchInput());
      })
    }
    return this.#dataService.courses();
  });
  
  handleSearch( ev: SearchbarCustomEvent ): void {
    this.searchInput.update(() => ev.detail.value as string);
  }

}
