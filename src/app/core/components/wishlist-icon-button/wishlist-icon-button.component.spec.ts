import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WishlistIconButtonComponent } from './wishlist-icon-button.component';
import { WishlistService } from '@core/services/wishlist.service';

describe('WishlistIconButtonComponent', () => {
  let component: WishlistIconButtonComponent;
  let fixture: ComponentFixture<WishlistIconButtonComponent>;
  let wishlistService: WishlistService;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(WishlistIconButtonComponent);
    component = fixture.componentInstance;
    wishlistService = TestBed.inject(WishlistService);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be added wishlist', () => {
    component.id = 1;
    component.addToWishlist()
    expect(component.wishlistIds()[0]).toBe(1);
  });

  it('should be removed from wishlist', () => {
    component.id = 1;
    component.removeFromWishlist()
    expect(component.wishlistIds().length).toBe(0);
  });
});
