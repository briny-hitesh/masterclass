import { Injectable, inject, signal } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { TOAST_CONFIG } from '../constants/toast.constant';

@Injectable({
    providedIn: 'root'
})

export class CartService {
    #toast: ToastController = inject(ToastController);

    cartItemsIds = signal<number[]>([]);

    addToCart(id: number) {
        this.cartItemsIds.update((courseIds) => [...courseIds, id]);
        this.#toast.create({
            message: 'Course added to your cart.',
            ...TOAST_CONFIG
        }).then(toast => toast.present());
    }

    removeFromCart(id: number) {
        this.cartItemsIds.update((courseIds) => this.cartItemsIds().filter((courseId) => courseId !== id ));
        this.#toast.create({
            message: 'Course removed from your cart.',
            ...TOAST_CONFIG
        }).then(toast => toast.present());
    }
}