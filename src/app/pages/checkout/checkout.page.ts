import { CurrencyPipe } from "@angular/common";
import { Component, computed, inject } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CartService } from "@core/services/cart.service";
import { DataService } from "@core/services/data.service";

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.page.html',
    styleUrls: ['./checkout.page.scss'],
    standalone: true,
    imports: [IonicModule, CurrencyPipe]
})

export class CheckoutPage {
    #dataService: DataService = inject(DataService);
    #cartService: CartService = inject(CartService);

    cartItems = computed(() => {
        return this.#dataService.courses().filter((course) => {
            return (this.#cartService.cartItemsIds().includes(course.id));
        });
    });

    totalAmount = computed(() => {
        return this.cartItems().reduce((total, course) => total + course.getEffectivePrice, 0);
    });
}