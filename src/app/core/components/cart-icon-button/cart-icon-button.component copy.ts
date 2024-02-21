import { Component, Input, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { CartService } from '@core/services/cart.service';
import { ROUTES } from '@core/constants/routes.constant';

@Component({
  selector: 'app-cart-icon-button',
  templateUrl: './cart-icon-button.component.html',
  standalone: true,
  imports: [IonicModule, RouterLink],
})
export class CartIconButtonComponent {
  #cartService: CartService = inject(CartService);

  checkoutRoute: string = `/${ROUTES.TABS}/${ROUTES.CHECKOUT}`;

  @Input() id!: number;

  cartItemsIds = this.#cartService.cartItemsIds;

  addToCart(id: number): void {
    this.#cartService.addToCart(id);
  }
}
