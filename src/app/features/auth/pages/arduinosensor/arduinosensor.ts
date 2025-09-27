// arduino-sensors.component.ts

import { Component, Input, SimpleChanges, Output, EventEmitter, signal, OnChanges, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../../environments/environment.development';
import { HousesDto } from '../../models/houses-dto';
import {SensorData ,House } from '../../models/arduinosensor-dto';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-arduinosensor',
  standalone: true,
  imports: [CommonModule , FieldsetModule ],
  templateUrl: './arduinosensor.html',
     styleUrl: './arduinosensor.css',
  providers: [HttpClient]
})
export class ArduinoSensorComponent implements OnChanges {

  // PROPRIÉTÉS D'ENTRÉE (du parent vers l'enfant)
@Input() houseData: HousesDto | null = null;
@Input() isVisible: boolean = false;

@Output() closeRequested = new EventEmitter<void>();

// ÉVÉNEMENTS DE SORTIE (de l'enfant vers le parent)
@Output() sensorLoaded = new EventEmitter<SensorData[]>();

  // Signals avec le bon typage
  sensorData = signal<SensorData[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  messageFromParent: any;

  constructor(private http: HttpClient) {
    // Effect qui réagit aux changements de houseData
    effect(() => {
      const house = this.messageFromParent;
      if (house?.HouseId) {
        console.log('🏠 Nouvelle maison détectée via effect:', house.HouseName);
        this.loadSensorsForHouse(house.HouseId);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['messageFromParent'] && this.messageFromParent?.HouseId) {
      console.log('🔄 Changement détecté:', this.messageFromParent.HouseName);
      // CORRECTION: Conversion en string
      this.loadSensorsForHouse(String(this.messageFromParent.HouseId));
    }
  }

  loadSensorsForHouse(houseId: string): void {
    if (!houseId) {
      console.warn('⚠️ Aucun ID de maison fourni');
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    const apiUrl = `${environment.API_URL}/maisonette/sensors/${houseId}`;
    console.log('📡 Chargement des capteurs pour:', houseId);

    this.http.get<SensorData[]>(apiUrl).subscribe({
      next: (data: SensorData[]) => {
        this.sensorData.set(data);
        this.loading.set(false);
        this.sensorLoaded.emit(data); // Émet vers le parent
        console.log('✅ Capteurs chargés:', data.length);
      },
      error: (error) => {
        console.error('❌ Erreur lors du chargement des capteurs:', error);
        this.error.set('Erreur lors du chargement des capteurs');
        this.sensorData.set([]);
        this.loading.set(false);
      }
    });
  }

  /*-----------------------------------------------
          onClose() methode
  ------------------------------------------------- */
  onClose(): void {
    this.closeRequested.emit(); // Émet vers le parent
  }

  getStatusClass(isActive: boolean): string {
    return isActive ? 'text-green' : 'text-red';
  }
}
