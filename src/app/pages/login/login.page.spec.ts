import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { ToastController } from "@ionic/angular";
import { LoginPage } from './login.page';

import { TOAST_CONFIG } from '@core/constants/toast.constant';
import { Router } from '@angular/router';
import { ROUTES } from '@core/constants/routes.constant';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let toast: ToastController;
  let router: Router;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    toast = TestBed.inject(ToastController);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should throw error when username is not entered', async () => {
    const mockToast = spyOn(toast, 'create').and.callThrough();
    component.password = 'dummy123';
    component.signIn();
    expect(mockToast).toHaveBeenCalled();
    expect(mockToast).toHaveBeenCalledWith({
      message: 'Invalid credentials!',
      ...TOAST_CONFIG
    });
  });

  it('should throw error when password is not entered', async () => {
    const mockToast = spyOn(toast, 'create').and.callThrough();
    component.username = '';
    component.signIn();
    expect(mockToast).toHaveBeenCalled();
    expect(mockToast).toHaveBeenCalledWith({
      message: 'Look like you have entered invalid username or password.',
      ...TOAST_CONFIG
    });
  });
  
  it('should redirect to home on login success', async () => {
    const mockRouter = spyOn(router, 'navigateByUrl');
    component.username = 'qvg';
    component.password = 'dummy123';
    component.signIn();
    expect(mockRouter).toHaveBeenCalled();
    expect(mockRouter).toHaveBeenCalledWith(`/${ROUTES.HOME}`);
  });

  it(`should toaster disappear after ${TOAST_CONFIG.duration}`, fakeAsync(() => {
    component.signIn();
    const Ref = toast.getTop();
    expect(Ref).toBeTruthy();
    tick(TOAST_CONFIG.duration - 1);
    expect(Ref).toBeTruthy();
    tick(3);
    expect(Ref).toBeFalsy();
  }));
});
