import { Component, Input, OnInit, inject } from '@angular/core';
import { WishlistService } from '@core/services/wishlist.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-wishlist-icon-button',
  templateUrl: './wishlist-icon-button.component.html',
  standalone: true,
  imports: [ IonicModule ],
})
export class WishlistIconButtonComponent {
  @Input() id!: number;

  #wishlistService: WishlistService = inject(WishlistService);
  wishlistIds = this.#wishlistService.wishlistID;

  addToWishlist(): void {
    this.#wishlistService.addWishlist(this.id);
  }

  removeFromWishlist(): void {
    this.#wishlistService.removeWishlist(this.id);
  }
}
