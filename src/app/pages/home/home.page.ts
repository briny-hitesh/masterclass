import { CommonModule, CurrencyPipe, SlicePipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { RouterLink } from '@angular/router';
import { CartIconButtonComponent } from '@core/components/cart-icon-button/cart-icon-button.component';
import { WishlistIconButtonComponent } from '@core/components/wishlist-icon-button/wishlist-icon-button.component';
import { ACTIONS } from '@core/constants/actions.constant';
import { DataService } from '@core/services/data.service';
import { IonicModule } from '@ionic/angular';

const imports = [
  IonicModule, CommonModule, CurrencyPipe, SlicePipe, RouterLink, CartIconButtonComponent, WishlistIconButtonComponent,
]

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ ...imports ],
})
export class HomePage {
  #dataService: DataService = inject(DataService);
  courses = this.#dataService.courses;
  actions = ACTIONS;
}
