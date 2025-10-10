import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { environment } from '../../../../../environments/environment.development';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addhouse',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    ButtonGroupModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    InputTextModule ,
    RouterModule,
  ],
  templateUrl: './add-house.html',
  styleUrl: './add-house.css',
})
export class AddHouseComponent {
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _router: Router = inject(Router);
  private readonly _http = inject(HttpClient);

  // Formulaire corrigé - Formulaire utilisé UNIQUEMENT SI INPUT /!\
  addHouseForm = this._fb.group({
    name: ['', Validators.required],
    ipv4: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
    isactive: [false] // ← Pas besoin de required pour boolean
  });

  submit() {
    if (this.addHouseForm.invalid) {
      console.warn('Formulaire invalide');
      console.log('Erreurs:', this.addHouseForm.errors);
      return;
    }
    // les données qui ont étées saisies (addHouseForm.controls['xx'].value)
    const dataFromForm = {
      Name: this.addHouseForm.controls['name'].value,
      IPV4: this.addHouseForm.controls['ipv4'].value,
      IsActive: this.addHouseForm.controls['isactive'].value,
    };

    console.log('Données envoyées:', dataFromForm);

    this._http.post(environment.API_URL + '/House', dataFromForm, {
      headers: { Authorization: 'Bearer ' + this._authService.currentUser()?.token }
    }).subscribe({
                  next: data => {
                    console.log('Succès:', data);
                    // Redirection ou message de succès
                  },
                  error: err => {
                    console.error('Erreur:', err);
                  }
                 });
  }

  // Supprimez les méthodes inutiles si vous ne les utilisez pas
  createHouse() {
    console.log('Créer: Creation d\'une nouvelle maison');
    this._router.navigate(['./add-house']);
  }

}
