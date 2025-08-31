import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginForm, RegisterForm, UserDto, UserTokenDto} from '../models/user-dto';
import {MaisonsDto} from '../models/maisons-dto';
import {environment} from '../../../../environments/environment';
import {Observable, tap} from 'rxjs';
import {MaisonsDetailDto} from '../models/maisons-detail-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _http: HttpClient = inject(HttpClient);
  private readonly _apiUrl = environment.API_URL + "/auth";
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

  getMaisons(form: MaisonsDto): Observable<MaisonsDto> {
    return this._http.post<MaisonsDto>(this._apiUrl + "/maisons", form);
  }
  getMaisonsDetail(form: MaisonsDetailDto): Observable<MaisonsDetailDto> {
    return this._http.post<MaisonsDetailDto>(this._apiUrl + "/maisons-detail", form);
  }

  getUser(): UserDto | undefined {
    return this._currentUser(); // ✅ appel correct du signal
  }

  logout() {
    this.currentUser.set(undefined);
    localStorage.removeItem("currentUser");
  }
}
