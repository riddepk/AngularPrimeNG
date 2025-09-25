import { TableModule } from 'primeng/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Component, inject, OnInit, signal} from '@angular/core';
import {HousesDto, HousesJson} from '../../models/houses-dto';
import { CommonModule } from '@angular/common';
import { ArduinoSensorComponent } from '../arduinosensor/arduinosensor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment.development';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-maisons',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CommonModule,
    ArduinoSensorComponent,
],
  templateUrl: './list-maisons.html',
  styleUrl: './list-maisons.css'
})

export class ListMaisonsComponent implements OnInit{
  private readonly _router: Router = inject(Router);
  private readonly _http = inject(HttpClient);
  private readonly _authservice: AuthService = inject(AuthService);

 // Utilisation des signals Angular 20
  listmaisons = signal<HousesJson[]>([]);
  selectedHouse = signal<HousesDto | null>(null);
  showSensors = signal<boolean>(false);

  HouseId: number = 0;
  HouseName: string = '';
  HouseIP4:string='';
  isactive: boolean = false;

  constructor(private http: HttpClient) {}

  /************************************************************
  *    Lors de l'affichage de la page ngOnInit() s'execute
  ************************************************************* */
  ngOnInit(): void {
    console.log('Token:', this._authservice.currentUser()?.token);
    this.loadHouses();
  }
/***************************************************************
*            Chargement des maisons
**************************************************************** */
  loadHouses():void {
    this._http.get(environment.API_URL + '/House', {
      headers: {
        Authorization: 'Bearer ' + this._authservice.currentUser()?.token,
        'Content-Type': 'application/json'
      }
    }).subscribe({
      next: data => {
                      console.log('Success:', data);
                      this.listmaisons.set(data as HousesJson[]);
                    },
      error: err => {
        console.error('Error details:', err);
        // Si erreur 401, rediriger vers login
        if (err.status === 401) {
          this._router.navigate(['/login']);
        }
      }
    });
  }


onSelect(maison: HousesJson): void {
  const mapped: HousesDto = {
    HouseId: maison.id,
    HouseName: maison.name,
    HouseIP4: maison.ipv4,
    HouseOwner_Id: '0', // ou une vraie valeur
    IsHouseActive: maison.isActive,
    Housestatus: maison.isActive ? 'Active' : 'Inactive',
    HousePassword: ''
  };
  this.selectedHouse.set(mapped);
  this.showSensors.set(true);
  console.log('Maison sélectionnée:', mapped);
}


  close(): void {
    this.selectedHouse.set(null);
    this.showSensors.set(false);
  }

  onCloseSensors(): void {
    this.showSensors.set(false);
  }

  getStatusClass(isActive: boolean): string {
    return isActive ? 'text-green' : 'text-red';
  }
}
