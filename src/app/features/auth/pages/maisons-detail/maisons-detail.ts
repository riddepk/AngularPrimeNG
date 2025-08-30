import {Component, inject} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-maisons-detail',
  imports: [],
  templateUrl: './maisons-detail.html',
  styleUrl: './maisons-detail.css'
})
export class MaisonsDetail {
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _router: Router = inject(Router);
}
