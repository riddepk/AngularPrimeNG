import { Component, inject } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Button} from 'primeng/button';
import { ButtonGroup } from "primeng/buttongroup";
import { environment } from '../../../../../environments/environment.development';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CheckboxModule } from 'primeng/checkbox';

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
    CheckboxModule
],
  templateUrl: './add-house.html'
})
export class AddHouse {
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _router: Router = inject(Router);
  private readonly _http = inject(HttpClient);

  name: string = '';
  ipv4: string = '';
  isactive:boolean=false;

addHouseForm = this._fb.group({
    name: ['Name', Validators.required],
    ipv4: ['IP', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
    isactive: [false, Validators.required]
  });

  constructor(private dialogRef: MatDialogRef<AddHouse>) {}

  close() {
    this.dialogRef.close();
  }

  submit() {
     if (this.addHouseForm.invalid) {
            console.warn('Formulaire invalide');
      return;
    }
    this.addHouseForm.markAllAsTouched();
    //console.log('=============>'+JSON.stringify(this.addHouseForm.value)+'<========================');
    let dataFromForm = {
      Name : this.addHouseForm.controls['name'].value,
      IPV4 : this.addHouseForm.controls['ipv4'].value,
      IsActive : this.addHouseForm.controls['isactive'].value,
    }
    //console.log('=============>'+JSON.stringify(dataFromForm)+'<========================');
    this._http.post(environment.API_URL + '/House', dataFromForm, {
      headers: { Authorization: 'Bearer ' + this._authService.currentUser()?.token }
    }).subscribe( {
      next : data => console.log(data),
      error : err => console.error(err)      
    });
    // -------------------- fermeture popup
    this.dialogRef.close();
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
