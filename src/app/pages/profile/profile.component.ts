import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor(private authSrc: AuthService, private router: Router) {}

  get currentUser() {
    return this.authSrc.currentUser.pipe(
      filter((user) => {
        if (!user) {
          this.router.navigate(['/', 'profile', 'login']);
          return false;
        }
        return true;
      })
    );
  }

  async logOut() {
    await this.authSrc.logout();
    this.router.navigate(['/', 'profile', 'login']);
  }
}
