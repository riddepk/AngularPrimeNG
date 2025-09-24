import { TableModule } from 'primeng/table';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {Maisonservice} from '../../../../services/maisonservice';
import {Component, inject, OnInit, signal} from '@angular/core';
import {HousesDto, HousesModel} from '../../models/houses-dto';
import {ArduinoSensorDto} from '../../models/arduinosensor-dto';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from "primeng/button";
import { ArduinoSensorComponent } from '../arduinosensor/arduinosensor';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment.development';

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
 // Utilisation des signals Angular 20
  maisons = signal<HousesDto[]>([]);
  selectedHouse = signal<HousesDto | null>(null);
  showSensors = signal<boolean>(false);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadHouses();
  }

  loadHouses(): void {
    const apiUrl = environment.API_URL + '/House';

    this.http.get<HousesDto[]>(apiUrl).subscribe({
      next: (data: HousesDto[]) => {
        this.maisons.set(data);
        console.log('Maisons chargées:', data);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des maisons:', error);
      }
    });
  }

  onSelect(maison: HousesDto): void {
    this.selectedHouse.set(maison);
    this.showSensors.set(true);
    console.log('Maison sélectionnée:', maison);
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
