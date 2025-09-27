import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {HousesModel} from '../features/auth/models/houses-dto';
import {UserTokenDto} from '../features/auth/models/user-dto';
import { ArduinoSensorDto, SensorTempHumDto } from '../features/auth/models/arduinosensor-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ArduinoSensorsServices {

  private readonly http = inject(HttpClient);
    getSensorTempHumData(): Observable<SensorTempHumDto> {
    return this.http.get<SensorTempHumDto>(environment.IOT_URL+'/sensor');
  }

  currentUser: WritableSignal<UserTokenDto | undefined> | undefined;

  initializerArduinoSensor(): ArduinoSensorDto[] {
    const tableauArduinoSensor: ArduinoSensorDto[] = [
    { id: 1, definitionOfEvent: "Température salon", digitalValue: 22.5, analogicValue: false, lastUpdated: new Date('2024-09-14T10:30:00'), category: "Capteur", houseOwner: 101 },
    { id: 2, definitionOfEvent: "Humidité chambre", digitalValue: 65.2, analogicValue: false, lastUpdated: new Date('2024-09-14T10:25:00'), category: "Capteur", houseOwner: 101 },
    { id: 3, definitionOfEvent: "Détecteur mouvement entrée", digitalValue: 1, analogicValue: true, lastUpdated: new Date('2024-09-14T10:20:00'), category: "Capteur", houseOwner: 102 },
    { id: 4, definitionOfEvent: "Ventilateur salon", digitalValue: 1, analogicValue: true, lastUpdated: new Date('2024-09-14T09:45:00'), category: "Actionneur", houseOwner: 102 },
    { id: 5, definitionOfEvent: "Porte principale", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T10:35:00'), category: "Capteur", houseOwner: 103 },
    { id: 6, definitionOfEvent: "Fenêtre cuisine", digitalValue: 1, analogicValue: true, lastUpdated: new Date('2024-09-14T10:00:00'), category: "Capteur", houseOwner: 103 },
    { id: 7, definitionOfEvent: "LED jaune couloir", digitalValue: 1, analogicValue: true, lastUpdated: new Date('2024-09-14T09:30:00'), category: "Actionneur", houseOwner: 104 },
    { id: 8, definitionOfEvent: "LED rouge alarme", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T10:15:00'), category: "Actionneur", houseOwner: 104 },
    { id: 9, definitionOfEvent: "Détecteur pluie jardin", digitalValue: 1, analogicValue: true, lastUpdated: new Date('2024-09-14T08:45:00'), category: "Capteur", houseOwner: 105 },
    { id: 10, definitionOfEvent: "Température cave", digitalValue: 12.8, analogicValue: false, lastUpdated: new Date('2024-09-14T10:10:00'), category: "Capteur", houseOwner: 105 },
    { id: 11, definitionOfEvent: "Humidité salle de bain", digitalValue: 78.3, analogicValue: false, lastUpdated: new Date('2024-09-14T09:15:00'), category: "Capteur", houseOwner: 106 },
    { id: 12, definitionOfEvent: "Détecteur mouvement garage", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T10:40:00'), category: "Capteur", houseOwner: 106 },
    { id: 13, definitionOfEvent: "Ventilateur chambre", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T10:05:00'), category: "Actionneur", houseOwner: 107 },
    { id: 14, definitionOfEvent: "Porte garage", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T07:30:00'), category: "Capteur", houseOwner: 107 },
    { id: 15, definitionOfEvent: "Fenêtre salon", digitalValue: 1, analogicValue: true, lastUpdated: new Date('2024-09-14T10:22:00'), category: "Capteur", houseOwner: 108 },
    { id: 16, definitionOfEvent: "LED jaune entrée", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T10:18:00'), category: "Actionneur", houseOwner: 108 },
    { id: 17, definitionOfEvent: "LED rouge sécurité", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T06:45:00'), category: "Actionneur", houseOwner: 109 },
    { id: 18, definitionOfEvent: "Détecteur pluie terrasse", digitalValue: 1, analogicValue: true, lastUpdated: new Date('2024-09-14T09:00:00'), category: "Capteur", houseOwner: 109 },
    { id: 19, definitionOfEvent: "Température grenier", digitalValue: 28.4, analogicValue: false, lastUpdated: new Date('2024-09-14T10:12:00'), category: "Capteur", houseOwner: 110 },
    { id: 20, definitionOfEvent: "Humidité bureau", digitalValue: 55.7, analogicValue: false, lastUpdated: new Date('2024-09-14T10:45:00'), category: "Capteur", houseOwner: 110 },
    { id: 21, definitionOfEvent: "Détecteur mouvement couloir", digitalValue: 1, analogicValue: true, lastUpdated: new Date('2024-09-14T08:00:00'), category: "Capteur", houseOwner: 111 },
    { id: 22, definitionOfEvent: "Ventilateur cuisine", digitalValue: 1, analogicValue: true, lastUpdated: new Date('2024-09-14T10:32:00'), category: "Actionneur", houseOwner: 111 },
    { id: 23, definitionOfEvent: "Porte arrière", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T10:28:00'), category: "Capteur", houseOwner: 112 },
    { id: 24, definitionOfEvent: "Fenêtre chambre", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T09:55:00'), category: "Capteur", houseOwner: 112 },
    { id: 25, definitionOfEvent: "LED jaune cuisine", digitalValue: 1, analogicValue: true, lastUpdated: new Date('2024-09-14T10:38:00'), category: "Actionneur", houseOwner: 113 },
    { id: 26, definitionOfEvent: "LED rouge urgence", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T08:30:00'), category: "Actionneur", houseOwner: 113 },
    { id: 27, definitionOfEvent: "Détecteur pluie balcon", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T10:44:00'), category: "Capteur", houseOwner: 114 },
    { id: 28, definitionOfEvent: "Température sous-sol", digitalValue: 15.2, analogicValue: false, lastUpdated: new Date('2024-09-14T09:20:00'), category: "Capteur", houseOwner: 114 },
    { id: 29, definitionOfEvent: "Humidité garage", digitalValue: 45.8, analogicValue: false, lastUpdated: new Date('2024-09-14T10:08:00'), category: "Capteur", houseOwner: 115 },
    { id: 30, definitionOfEvent: "Détecteur mouvement jardin", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T10:42:00'), category: "Capteur", houseOwner: 115 },
    { id: 31, definitionOfEvent: "Ventilateur salle de bain", digitalValue: 1, analogicValue: true, lastUpdated: new Date('2024-09-14T10:02:00'), category: "Actionneur", houseOwner: 116 },
    { id: 32, definitionOfEvent: "Porte cave", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T11:15:00'), category: "Capteur", houseOwner: 116 },
    { id: 33, definitionOfEvent: "Fenêtre bureau", digitalValue: 1, analogicValue: true, lastUpdated: new Date('2024-09-14T09:45:00'), category: "Capteur", houseOwner: 117 },
    { id: 34, definitionOfEvent: "LED jaune garage", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T10:25:00'), category: "Actionneur", houseOwner: 117 },
    { id: 35, definitionOfEvent: "LED rouge panique", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T10:35:00'), category: "Actionneur", houseOwner: 118 },
    { id: 36, definitionOfEvent: "Détecteur pluie cour", digitalValue: 1, analogicValue: true, lastUpdated: new Date('2024-09-14T09:10:00'), category: "Capteur", houseOwner: 118 },
    { id: 37, definitionOfEvent: "Température extérieure", digitalValue: 18.5, analogicValue: false, lastUpdated: new Date('2024-09-14T10:18:00'), category: "Capteur", houseOwner: 119 },
    { id: 38, definitionOfEvent: "Humidité extérieure", digitalValue: 68.9, analogicValue: false, lastUpdated: new Date('2024-09-14T08:45:00'), category: "Capteur", houseOwner: 119 },
    { id: 39, definitionOfEvent: "Détecteur mouvement escalier", digitalValue: 1, analogicValue: true, lastUpdated: new Date('2024-09-14T10:50:00'), category: "Capteur", houseOwner: 120 },
    { id: 40, definitionOfEvent: "Ventilateur grenier", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T10:30:00'), category: "Actionneur", houseOwner: 120 },
    { id: 41, definitionOfEvent: "Porte terrasse", digitalValue: 1, analogicValue: true, lastUpdated: new Date('2024-09-14T10:40:00'), category: "Capteur", houseOwner: 121 },
    { id: 42, definitionOfEvent: "Fenêtre grenier", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T09:25:00'), category: "Capteur", houseOwner: 121 },
    { id: 43, definitionOfEvent: "LED jaune terrasse", digitalValue: 1, analogicValue: true, lastUpdated: new Date('2024-09-14T10:15:00'), category: "Actionneur", houseOwner: 122 },
    { id: 44, definitionOfEvent: "LED rouge défaut", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T07:00:00'), category: "Actionneur", houseOwner: 122 },
    { id: 45, definitionOfEvent: "Détecteur pluie toit", digitalValue: 1, analogicValue: true, lastUpdated: new Date('2024-09-14T09:35:00'), category: "Capteur", houseOwner: 123 },
    { id: 46, definitionOfEvent: "Température atelier", digitalValue: 20.3, analogicValue: false, lastUpdated: new Date('2024-09-14T06:30:00'), category: "Capteur", houseOwner: 123 },
    { id: 47, definitionOfEvent: "Humidité atelier", digitalValue: 52.1, analogicValue: false, lastUpdated: new Date('2024-09-14T10:22:00'), category: "Capteur", houseOwner: 124 },
    { id: 48, definitionOfEvent: "Détecteur mouvement atelier", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T10:48:00'), category: "Capteur", houseOwner: 124 },
    { id: 49, definitionOfEvent: "Ventilateur atelier", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T10:05:00'), category: "Actionneur", houseOwner: 125 },
    { id: 50, definitionOfEvent: "Porte atelier", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T08:15:00'), category: "Capteur", houseOwner: 125 },
    { id: 51, definitionOfEvent: "Fenêtre atelier", digitalValue: 1, analogicValue: true, lastUpdated: new Date('2024-09-14T10:33:00'), category: "Capteur", houseOwner: 126 },
    { id: 52, definitionOfEvent: "LED jaune atelier", digitalValue: 1, analogicValue: true, lastUpdated: new Date('2024-09-14T06:00:00'), category: "Actionneur", houseOwner: 126 },
    { id: 53, definitionOfEvent: "LED rouge maintenance", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T09:50:00'), category: "Actionneur", houseOwner: 127 },
    { id: 54, definitionOfEvent: "Détecteur pluie pergola", digitalValue: 0, analogicValue: true, lastUpdated: new Date('2024-09-14T10:44:00'), category: "Capteur", houseOwner: 127 },
    { id: 55, definitionOfEvent: "Température véranda", digitalValue: 26.7, analogicValue: false, lastUpdated: new Date('2024-09-14T10:44:00'), category: "Capteur", houseOwner: 119 }
    ];
    return tableauArduinoSensor;
  }

}
