import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartService } from '@core/services/cart.service';
import { CartIconButtonComponent } from './cart-icon-button.component';

describe('CartIconButtonComponent', () => {
  let component: CartIconButtonComponent;
  let fixture: ComponentFixture<CartIconButtonComponent>;
  let cartService: CartService;
  beforeEach(() => {
    
    fixture = TestBed.createComponent(CartIconButtonComponent);
    cartService = TestBed.inject(CartService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has checkout url', () => {
    expect(component.checkoutRoute).toBeDefined();
  });

  it('should update id in cart service', () => {
    component.addToCart(1);
    expect(component.cartItemsIds().includes(1)).toBeTrue();
  });
});
