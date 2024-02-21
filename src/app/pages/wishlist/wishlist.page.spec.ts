import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WishlistPage } from './wishlist.page';
import { DataService } from '@core/services/data.service';
import { WishlistService } from '@core/services/wishlist.service';

describe('WishlistPage', () => {
  let component: WishlistPage;
  let fixture: ComponentFixture<WishlistPage>;
  let dataService: DataService;
  let wishlistService: WishlistService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WishlistPage,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WishlistPage);
    dataService = TestBed.inject(DataService);
    wishlistService = TestBed.inject(WishlistService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
