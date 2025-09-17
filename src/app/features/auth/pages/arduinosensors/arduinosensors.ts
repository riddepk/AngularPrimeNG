// arduino-sensors.component.ts

import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-arduinosensors',
  standalone: true,
  // Vous n'avez plus besoin d'importer HttpClientModule ici
  imports: [CommonModule],
  templateUrl: './arduinosensors.html',
  styleUrl: './arduinosensors.css',
  // On fournit le service directement dans ce composant
  // Il sera donc disponible pour ce composant et ses enfants
  providers: [HttpClient]
})
export class ArduinoSensors implements OnInit {

  sensorData: any[] = [];

  // La nouvelle méthode pour injecter un service
  private http = inject(HttpClient);

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
