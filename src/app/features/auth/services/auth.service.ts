import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginForm, RegisterForm, UserTokenDto} from '../models/user-dto';
import {environment} from '../../../../environments/environment';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _http: HttpClient = inject(HttpClient);
  private readonly _apiUrl = environment.API_URL + "/auth";

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

  logout() {
    this.currentUser.set(undefined);
    localStorage.removeItem("currentUser");
  }
}
