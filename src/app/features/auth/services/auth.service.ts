import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginForm, RegisterForm, UserDto, UserTokenDto} from '../models/user-dto';
import {HousesDto} from '../models/houses-dto';
import {environment} from '../../../../environments/environment';
import {Observable, tap} from 'rxjs';
import {ArduinoSensorDto} from '../models/arduinosensor-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _http: HttpClient = inject(HttpClient);
  private readonly _apiUrl = environment.API_URL + "/Auth";
  private readonly _currentUser = signal<UserDto | undefined>(undefined);

  currentUser: WritableSignal<UserTokenDto | undefined>;

  constructor() {
    let json = localStorage.getItem('currentUser');
    this.currentUser = signal(json ? JSON.parse(json) : undefined);
  }

  register(form: RegisterForm): Observable<void> {
    return this._http.post<void>(this._apiUrl + "/register", form);
  }

  login(form: LoginForm): Observable<UserTokenDto> {
    return this._http.post<UserTokenDto>(this._apiUrl + "/login", form)
      .pipe(
        tap((result: UserTokenDto) => {
          this.currentUser.set(result)
          localStorage.setItem("currentUser", JSON.stringify(result))
        }),
      );
  }

  getMaisons(form: HousesDto): Observable<HousesDto> {
    return this._http.post<HousesDto>(this._apiUrl + "/maisons", form);
  }

  getArduinoSensors(form: ArduinoSensorDto): Observable<ArduinoSensorDto> {
    return this._http.post<ArduinoSensorDto>(this._apiUrl + "/arduinosensors", form);
  }

  getUser(): UserDto | undefined {
    return this._currentUser();
  }

  logout() {
    this.currentUser.set(undefined);
    localStorage.removeItem("currentUser");
  }

  addHouse(form: HousesDto): Observable<HousesDto> {
    return this._http.post<HousesDto>(this._apiUrl + "/House", form);
  }

listUsers(): Observable<UserDto[]> {
  return this._http.get<UserDto[]>(this._apiUrl + "/User");
}

}
