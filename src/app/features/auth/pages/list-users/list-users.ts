import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatDialogRef} from '@angular/material/dialog';
import { MatInputModule } from "@angular/material/input";
import { ButtonGroup } from "primeng/buttongroup";
import { Button } from "primeng/button";
import { UserDto } from '../../models/user-dto';
import { TableModule } from "primeng/table";


@Component({
  selector: 'app-list-users',
  imports: [MatInputModule, ReactiveFormsModule, TableModule],
  templateUrl: './list-users.html',
  styleUrl: './list-users.css'
})
export class ListUsers {
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _router: Router = inject(Router);
  private readonly _http = inject(HttpClient);
  
  listuser: UserDto[] = [];
  
  id:number=0;
  role: string = '';
  username: string = '';

listUsersForm = this._fb.group({
    id:['',[]],
    username: ['Name', []],
    role: ['role', []],
  });

  constructor(private dialogRef: MatDialogRef<ListUsers>) {}

   close() {
    this.dialogRef.close();
  }

}
