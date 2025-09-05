import {Component, inject, Signal} from '@angular/core';
import {Button} from 'primeng/button';
import {ButtonGroup} from 'primeng/buttongroup';
import {Router, RouterLink} from '@angular/router';
import { AuthService } from '../../../features/auth/services/auth.service';
import { UserTokenDto } from '../../../features/auth/models/user-dto';
import {AddHouse} from '../../../features/auth/pages/add-house/add-house';
import {MatDialog} from '@angular/material/dialog';

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

export class Nav {
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _router: Router = inject(Router);

  currentUser: Signal<UserTokenDto | undefined>;

  constructor(private dialog: MatDialog) {
    this.currentUser = this._authService.currentUser;
  }

  // --------------------------- methodes utilisees
  logout() {
    this._authService.logout();
    this._router.navigate(['/']);
  }


  openPopup() {
    const dialogRef = this.dialog.open(AddHouse);
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('Données reçues:', result);
      }
    });
  }

}
