// arduino-sensors.component.ts

import { Component, OnInit, inject,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../../environments/environment.development';
import { MaisonsComponent } from '../maisons/maisons';
import { HousesDto } from '../../models/houses-dto';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-arduinosensors',
  //standalone: true,
  imports: [CommonModule , FieldsetModule ],
  templateUrl: './arduinosensors.html',
     styleUrl: './arduinosensors.css',
  providers: [HttpClient]
})
export class ArduinoSensorComponent implements OnInit {

  sensorData: any[] = [];
  @Input() selectedHouse : HousesDto ;

  // La nouvelle méthode pour injecter un service
  private http = inject(HttpClient);
choisit: any;

  ngOnInit(): void {
    this.getSensorData();
  }

  getSensorData(): void {
    const apiUrl = environment.API_URL + '/maisonette/sensors';

    this.http.get<any[]>(apiUrl).subscribe({
      next: (data: any[]) => {
        this.sensorData = data;
        console.log('Données des capteurs:', this.sensorData);
      },
      error: (error: any) => {
        console.error('Erreur lors de la récupération des données:', error);
      }
    });
  }
}
