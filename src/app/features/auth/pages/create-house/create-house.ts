import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from "@angular/forms";
import { FloatLabel } from "primeng/floatlabel";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Button } from "primeng/button";
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-create-house',
  imports: [FormsModule, FloatLabel, ReactiveFormsModule, Button],
  templateUrl: './create-house.html',
  styleUrl: './create-house.css'
})

export class CreateHouse {
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _router: Router = inject(Router);
  private readonly _http = inject(HttpClient);

  houseowner!: string;
  houseip!:string;

createHouseForm = new FormGroup({
  name: new FormControl(null, [Validators.required]),
 // houseip: new FormControl(null, [Validators.required]),
});

  constructor() {
  }
  //-------------------------------------
submit() {
  console.log('=============>'+this.createHouseForm.value+'<========================');
  this._http.post(environment.API_URL + '/house', this.createHouseForm.value, {
    headers: { Authorization: 'Bearer ' + this._authService.currentUser()?.token }
  }).subscribe();
  }

} //---------------- fin Classe
