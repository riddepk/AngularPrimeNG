import { Injectable } from '@angular/core';
import {Maisons} from '../features/auth/models/maisons-dto';

@Injectable({
  providedIn: 'root'
})
export class Maisonservice {
  initializerTableauMaisonnettes(): Maisons[] {
    const tableauMaisonnettes: Maisons[] = [
      new Maisons('192.168.0.25', 'Gabriel','OFF'),
      new Maisons('10.10.5.25', 'Pierre','ON'),
      new Maisons('85.35.15.7', 'Patrick','ON')
    ];
    return tableauMaisonnettes;
  }
}
