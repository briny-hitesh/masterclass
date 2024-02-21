import { Injectable, inject, signal } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { TOAST_CONFIG } from '../constants/toast.constant';

@Injectable({
    providedIn: 'root'
})

export class WishlistService {
    #toast: ToastController = inject(ToastController);

    wishlistID = signal<number[]>([]);

    addWishlist(id: number) {
        this.wishlistID.update((courseIds) => [...courseIds, id]);
        this.#toast.create({
            message: 'Course added to your wishlist.',
            ...TOAST_CONFIG
        }).then(toast => toast.present());
    }

    removeWishlist(id: number) {
        this.wishlistID.update((courseIds) => this.wishlistID().filter((courseId) => courseId !== id ));
        this.#toast.create({
            message: 'Course removed from your wishlist.',
            ...TOAST_CONFIG
        }).then(toast => toast.present());
    }
}