import { Injectable } from '@angular/core';
import {HousesModel} from '../features/auth/models/houses-dto';
import { ListMaisonsComponent } from '../features/auth/pages/list-maisons/list-maisons';

@Injectable({
  providedIn: 'root'
})
export class Maisonservice {
  // ------------------------------ methode simulation données dans un tableau
  initializerTableauMaisonnettes(): HousesModel[] {
    const tableauMaisonnettes: HousesModel[] = [
      new HousesModel(1,'192.168.0.25', 'Gabriel',false,'Gabriel','motdepasse', 'ACTIVE'),
      new HousesModel(2,'10.10.5.25', 'Pierre',true,'Pierre','ljlj', 'ACTIVE'),
      new HousesModel(3,'85.35.15.7', 'Patrick',true,'Patrick','jk', 'ACTIVE'),
    ];
    console.log("je suis dans le service " );
    return tableauMaisonnettes;
  }
}
