import { Component, Input, OnInit, inject } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
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

  addToWishlist(id: number): void {
    this.#wishlistService.addWishlist(id);
  }

  removeFromWishlist(id: number): void {
    this.#wishlistService.removeWishlist(id);
  }
}
