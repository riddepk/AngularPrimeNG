import {Component, ElementRef, inject, Signal, ViewChild} from '@angular/core';
import {Button} from 'primeng/button';
import {ButtonGroup} from 'primeng/buttongroup';
import {Router, RouterLink} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { AuthService } from '../../../features/auth/services/auth.service';
import { UserTokenDto } from '../../../features/auth/models/user-dto';
import {AddHouse} from '../../../features/auth/pages/add-house/add-house';
import { ListUsers } from '../../../features/auth/pages/list-users/list-users';
import { Maisons } from '../../../features/auth/pages/maisons/maisons';

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


  // ----------------------------------------------------
    // --------------------------- mlogout
  logout() {
    this._authService.logout();
    this._router.navigate(['/']);
  }
  // ---------------------------------------- openPopup()
  openPopupHouse() {
    const dialogRef = this.dialog.open(AddHouse);
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        console.log('Données reçues:', res);
      }
    });
  }

  openPopupUser() {
    const dialogRef = this.dialog.open(ListUsers);
    dialogRef.afterClosed().subscribe((ret: any) => {
      if (ret) {
        console.log('Datas:', ret);
      }
    });
  }

@ViewChild('tableRef') tableRef!: ElementRef;
openPopupListHouses(): void {
  const minWidth = 600;
  const tableWidth = this.tableRef?.nativeElement?.offsetWidth || minWidth;

  const dialogRef = this.dialog.open(Maisons, {
    width: `${Math.max(tableWidth, minWidth)}px`,
    maxWidth: 'none',
    data: { }
  });

  dialogRef.afterClosed().subscribe((result: any) => {
    if (result) {
      console.log('Données reçues:', result);
    }
  });
}

// ------------------------- gestionDevices()
  gestionDevices() {

  }
}
