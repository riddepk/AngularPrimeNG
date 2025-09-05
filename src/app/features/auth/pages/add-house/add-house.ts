import { Component, inject } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Button} from 'primeng/button';
import { ButtonGroup } from "primeng/buttongroup";
import { environment } from '../../../../../environments/environment.development';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FloatLabel} from 'primeng/floatlabel';

@Component({
  selector: 'app-addhouse',
  imports: [
    MatDialogContent,
    MatFormFieldModule,
    MatDialogActions,
    MatInputModule,
    FormsModule,
    Button,
    ButtonGroup,
    FormsModule,
    ReactiveFormsModule,
],
  templateUrl: './add-house.html'
})
export class AddHouse {
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _router: Router = inject(Router);
  private readonly _http = inject(HttpClient);

  name: string = '';
  email: string = '';

  addHouseForm = new FormGroup({
  name: new FormControl(null, [Validators.required]),
 // houseip: new FormControl(null, [Validators.required]),
});

  constructor(private dialogRef: MatDialogRef<AddHouse>) {}

  close() {
    this.dialogRef.close();
  }

  submit() {
    console.log('=============>'+this.addHouseForm.value+'<========================');
    this._http.post(environment.API_URL + '/house', this.addHouseForm.value, {
      headers: { Authorization: 'Bearer ' + this._authService.currentUser()?.token }
    }).subscribe();
   }

  createHouse() {
    console.log('Creér: Creation d\'une nouvelle maison');
    this._router.navigate(['./add-house']);
    //this._router.navigate(['./create-house']);
    return;
  }
  gestionDevices(){
    return;
  }
}
