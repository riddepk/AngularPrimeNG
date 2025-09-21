import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatDialogRef, MatDialogActions } from '@angular/material/dialog';
import { MatInputModule } from "@angular/material/input";
import { ButtonGroup } from "primeng/buttongroup";
import { Button } from "primeng/button";
import { UserDto } from '../../models/user-dto';
import { TableModule } from "primeng/table";
import { environment } from '../../../../../environments/environment.development';
import { UserServices } from '../../../../services/user.services';


@Component({
  selector: 'app-list-users',
  standalone:true,
  imports: [ ReactiveFormsModule, TableModule, Button],
  templateUrl: './list-users.html',
  styleUrl: './list-users.css'
})
export class ListUsersComponent implements OnInit {
  //private readonly _authservice: AuthService = inject(AuthService);
  private readonly _router: Router = inject(Router);
  private readonly _http = inject(HttpClient);

  listUser: UserDto[] = [];

  id: number = 0;
  role: string = '';
  username: string = '';


  ngOnInit() {
    this._http.get<UserDto[]>(environment.API_URL + '/User').subscribe({
      next: data => {
        this.listUser = data;
        console.log(data);

      },
      error: err => console.error(err)
    });

  }
}
