import {Component, ElementRef, inject, Signal, ViewChild} from '@angular/core';
import {Button} from 'primeng/button';
import {ButtonGroup} from 'primeng/buttongroup';
import {Router, RouterLink} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { AuthService } from '../../../features/auth/services/auth.service';
import { UserTokenDto } from '../../../features/auth/models/user-dto';
import {AddHouseComponent} from '../../../features/auth/pages/add-house/add-house';
import { ListUsersComponent } from '../../../features/auth/pages/list-users/list-users';
import { MaisonsComponent } from '../../../features/auth/pages/maisons/maisons';

@Component({
  selector: 'app-nav',
  imports: [
    Button,
    ButtonGroup,
    RouterLink
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})

export class NavComponent {
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _router: Router = inject(Router);

  currentUser: Signal<UserTokenDto | undefined>;

  constructor(private dialog: MatDialog) {
    this.currentUser = this._authService.currentUser;
  }


  // ----------------------------------------------------
    // --------------------------- mlogout
  logout() {
    this._authService.logout();
    this._router.navigate(['/']);
  }

// ------------------------- gestionDevices()
  gestionDevices() {

  }
}
