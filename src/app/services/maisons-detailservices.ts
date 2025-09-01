import {Injectable, signal, WritableSignal} from '@angular/core';
import {HousesModel} from '../features/auth/models/houses-dto';
import {HousesDetail, HousesDetailDto} from '../features/auth/models/houses-detail-dto';
import {UserTokenDto} from '../features/auth/models/user-dto';

@Injectable({
  providedIn: 'root'
})
export class MaisonsDetailservices {

  currentUser: WritableSignal<UserTokenDto | undefined> | undefined;

  initializerTableauHousesDetail(): HousesDetailDto[] {
    const tableauMaisonsDetail: HousesDetailDto[] = [
      new HousesDetail('192.168.0.25', 'Gabriel', 'OFF', 'LED JAUNE', 'ACTIVE'),
      new HousesDetail('10.10.5.25', 'Pierre', 'ON', 'PORTE', 'DESACTIVE'),
      new HousesDetail('85.35.15.7', 'Patrick', 'ON', 'DETECTEUR THERMIQUE', 'ACTIVE'),
      new HousesDetail('192.168.0.25', 'Gabriel', 'ON', 'CAMÉRA', 'ACTIVE'),
      new HousesDetail('10.10.5.25', 'Pierre', 'OFF', 'ALARME', 'DESACTIVE'),
      new HousesDetail('85.35.15.7', 'Patrick', 'OFF', 'INTERPHONE', 'ACTIVE'),
      new HousesDetail('192.168.0.25', 'Gabriel', 'ON', 'VOLET', 'ACTIVE'),
      new HousesDetail('10.10.5.25', 'Pierre', 'ON', 'CLIMATISEUR', 'DESACTIVE'),
      new HousesDetail('85.35.15.7', 'Patrick', 'OFF', 'CHAUFFAGE', 'ACTIVE'),
      new HousesDetail('192.168.0.25', 'Gabriel', 'OFF', 'LUMIÈRE EXTÉRIEURE', 'DESACTIVE'),
      new HousesDetail('10.10.5.25', 'Pierre', 'ON', 'GARAGE', 'ACTIVE'),
      new HousesDetail('85.35.15.7', 'Patrick', 'ON', 'FENÊTRE', 'DESACTIVE'),
      new HousesDetail('192.168.0.25', 'Gabriel', 'ON', 'SERRURE', 'ACTIVE'),
      new HousesDetail('10.10.5.25', 'Pierre', 'OFF', 'VOIX', 'DESACTIVE'),
      new HousesDetail('85.35.15.7', 'Patrick', 'ON', 'THERMOSTAT', 'ACTIVE'),
      new HousesDetail('192.168.0.25', 'Gabriel', 'OFF', 'DÉTECTEUR DE FUMÉE', 'DESACTIVE'),
      new HousesDetail('10.10.5.25', 'Pierre', 'ON', 'MOUVEMENT', 'ACTIVE'),
      new HousesDetail('85.35.15.7', 'Patrick', 'OFF', 'LUMIÈRE INTÉRIEURE', 'DESACTIVE'),
      new HousesDetail('192.168.0.25', 'Gabriel', 'ON', 'PRISE INTELLIGENTE', 'ACTIVE'),
      new HousesDetail('10.10.5.25', 'Pierre', 'OFF', 'VOLET ROULANT', 'DESACTIVE'),
      new HousesDetail('85.35.15.7', 'Patrick', 'ON', 'CAMÉRA EXTÉRIEURE', 'ACTIVE'),
      new HousesDetail('192.168.0.25', 'Gabriel', 'OFF', 'ALARME INCENDIE', 'DESACTIVE'),
      new HousesDetail('10.10.5.25', 'Pierre', 'ON', 'DÉTECTEUR CO2', 'ACTIVE'),
      new HousesDetail('85.35.15.7', 'Patrick', 'OFF', 'SYSTÈME AUDIO', 'DESACTIVE'),
      new HousesDetail('192.168.0.25', 'Gabriel', 'ON', 'LUMIÈRE SALON', 'ACTIVE'),
      new HousesDetail('10.10.5.25', 'Pierre', 'OFF', 'LUMIÈRE CUISINE', 'DESACTIVE'),
      new HousesDetail('85.35.15.7', 'Patrick', 'ON', 'LUMIÈRE CHAMBRE', 'ACTIVE')
    ];
    return tableauMaisonsDetail;
  }

}
