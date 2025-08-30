import { Injectable } from '@angular/core';
import {Maisons} from '../features/auth/models/maisons-dto';
import {MaisonsDetail, MaisonsDetailDto} from '../features/auth/models/maisons-detail-dto';

@Injectable({
  providedIn: 'root'
})
export class MaisonsDetailservices {
  initializerTableauMaisonsDetail(): MaisonsDetailDto[] {
    const tableauMaisonsDetail: MaisonsDetail[] = [
      new MaisonsDetail('192.168.0.25', 'Gabriel', 'OFF', 'LED JAUNE', 'ACTIVE'),
      new MaisonsDetail('10.10.5.25', 'Pierre', 'ON', 'PORTE', 'DESACTIVE'),
      new MaisonsDetail('85.35.15.7', 'Patrick', 'ON', 'DETECTEUR THERMIQUE', 'ACTIVE'),

      new MaisonsDetail('192.168.0.25', 'Gabriel', 'ON', 'CAMÉRA', 'ACTIVE'),
      new MaisonsDetail('10.10.5.25', 'Pierre', 'OFF', 'ALARME', 'DESACTIVE'),
      new MaisonsDetail('85.35.15.7', 'Patrick', 'OFF', 'INTERPHONE', 'ACTIVE'),

      new MaisonsDetail('192.168.0.25', 'Gabriel', 'ON', 'VOLET', 'ACTIVE'),
      new MaisonsDetail('10.10.5.25', 'Pierre', 'ON', 'CLIMATISEUR', 'DESACTIVE'),
      new MaisonsDetail('85.35.15.7', 'Patrick', 'OFF', 'CHAUFFAGE', 'ACTIVE'),

      new MaisonsDetail('192.168.0.25', 'Gabriel', 'OFF', 'LUMIÈRE EXTÉRIEURE', 'DESACTIVE'),
      new MaisonsDetail('10.10.5.25', 'Pierre', 'ON', 'GARAGE', 'ACTIVE'),
      new MaisonsDetail('85.35.15.7', 'Patrick', 'ON', 'FENÊTRE', 'DESACTIVE'),

      new MaisonsDetail('192.168.0.25', 'Gabriel', 'ON', 'SERRURE', 'ACTIVE'),
      new MaisonsDetail('10.10.5.25', 'Pierre', 'OFF', 'VOIX', 'DESACTIVE'),
      new MaisonsDetail('85.35.15.7', 'Patrick', 'ON', 'THERMOSTAT', 'ACTIVE'),

      new MaisonsDetail('192.168.0.25', 'Gabriel', 'OFF', 'DÉTECTEUR DE FUMÉE', 'DESACTIVE'),
      new MaisonsDetail('10.10.5.25', 'Pierre', 'ON', 'MOUVEMENT', 'ACTIVE'),
      new MaisonsDetail('85.35.15.7', 'Patrick', 'OFF', 'LUMIÈRE INTÉRIEURE', 'DESACTIVE'),

      new MaisonsDetail('192.168.0.25', 'Gabriel', 'ON', 'PRISE INTELLIGENTE', 'ACTIVE'),
      new MaisonsDetail('10.10.5.25', 'Pierre', 'OFF', 'VOLET ROULANT', 'DESACTIVE'),
      new MaisonsDetail('85.35.15.7', 'Patrick', 'ON', 'CAMÉRA EXTÉRIEURE', 'ACTIVE'),

      new MaisonsDetail('192.168.0.25', 'Gabriel', 'OFF', 'ALARME INCENDIE', 'DESACTIVE'),
      new MaisonsDetail('10.10.5.25', 'Pierre', 'ON', 'DÉTECTEUR CO2', 'ACTIVE'),
      new MaisonsDetail('85.35.15.7', 'Patrick', 'OFF', 'SYSTÈME AUDIO', 'DESACTIVE'),

      new MaisonsDetail('192.168.0.25', 'Gabriel', 'ON', 'LUMIÈRE SALON', 'ACTIVE'),
      new MaisonsDetail('10.10.5.25', 'Pierre', 'OFF', 'LUMIÈRE CUISINE', 'DESACTIVE'),
      new MaisonsDetail('85.35.15.7', 'Patrick', 'ON', 'LUMIÈRE CHAMBRE', 'ACTIVE')
    ];

    return tableauMaisonsDetail;
  }
}
