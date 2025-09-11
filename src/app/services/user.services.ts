import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { UserDto, UserTokenDto } from '../features/auth/models/user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserServices {
    private readonly _http: HttpClient = inject(HttpClient);
    private readonly _apiUrl = environment.API_URL ;
    private readonly _currentUser = signal<UserDto | undefined>(undefined);

  currentUser: WritableSignal<UserTokenDto | undefined>;

  constructor() {
    let json = localStorage.getItem('currentUser');
    this.currentUser = signal(json ? JSON.parse(json) : undefined);
  }
}
