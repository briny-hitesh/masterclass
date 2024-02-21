import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CartIconButtonComponent } from '@core/components/cart-icon-button/cart-icon-button.component';
import { WishlistIconButtonComponent } from '@core/components/wishlist-icon-button/wishlist-icon-button.component';
import { DataService } from '@core/services/data.service';
import { WishlistService } from '@core/services/wishlist.service';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.page.html',
    styleUrls: ['./wishlist.page.scss'],
    standalone: true,
    imports: [IonicModule, CurrencyPipe, WishlistIconButtonComponent, CartIconButtonComponent],
})
export class WishlistPage implements OnInit {
    #dataService: DataService = inject(DataService);
    #wishlistService: WishlistService = inject(WishlistService);

    wishlist = computed(() => {
        return this.#dataService.courses().filter((course) => {
            return (this.#wishlistService.wishlistID().includes(course.id));
        });
    });

    ngOnInit(): void {}
}
