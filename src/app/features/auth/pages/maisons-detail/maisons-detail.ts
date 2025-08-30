import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maisons-detail',
  imports: [],
  templateUrl: './maisons-detail.html',
  styleUrl: './maisons-detail.css'
})
export class MaisonsDetail {
  ip!:string;

  private readonly _authService: AuthService = inject(AuthService);
  private readonly _router: Router = inject(Router);
}
