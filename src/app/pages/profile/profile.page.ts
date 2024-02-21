import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ROUTES } from '@core/constants/routes.constant';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
    standalone: true,
    imports: [IonicModule, RouterLink],
})
export class ProfilePage {
    #router: Router = inject(Router);

    signOut(): void {
        localStorage.clear();
        this.#router.navigateByUrl(`/${ROUTES.LOGIN}`);
    }
}
