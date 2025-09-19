import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { environment } from '../../../../../environments/environment.development';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { ButtonModule } from 'primeng/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CheckboxModule } from 'primeng/checkbox';
import { 
  MatDialogActions, 
  MatDialogContent, 
  MatDialogTitle,
  MatDialogClose 
} from '@angular/material/dialog';

@Component({
  selector: 'app-addhouse',
  standalone:true,
  imports: [
    MatFormFieldModule,
    MatDialogModule,
    ButtonGroupModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
     CheckboxModule,
    ButtonModule
],
  templateUrl: './add-house.html'
})


export class AddHouseComponent {
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _router: Router = inject(Router);
  private readonly _http = inject(HttpClient);
  private readonly dialogRef = inject(MatDialogRef<AddHouseComponent>);

  name: string = '';
  ipv4: string = '';
  isactive:boolean=false;

addHouseForm = this._fb.group({
    name: ['Name', Validators.required],
    ipv4: ['IP', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
    isactive: [false, Validators.required]
  });

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

close() {
  this.dialogRef.close();
}


}
