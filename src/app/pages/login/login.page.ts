import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from "@ionic/angular";
import { ROUTES } from '@core/constants/routes.constant';
import { TOAST_CONFIG } from '@core/constants/toast.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage {
  #router: Router = inject(Router);
  #toast: ToastController = inject(ToastController);

  username: string = '';
  password: string = '';

  /**
   * User sign in logic function for validation details
   * TODO: Validate user using backend api.
   */
  signIn(): void {
    if (this.username && this.password && this.password === 'dummy123') {
      localStorage.setItem('token', 'test')
      this.#router.navigateByUrl(`/${ROUTES.TABS}/${ROUTES.HOME}`);
    } else {
      this.#toast.create({
        message: 'Invalid credentials!',
        ...TOAST_CONFIG,
      }).then(modal => modal.present());
    }
  }

}
