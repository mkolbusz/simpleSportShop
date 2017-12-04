import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../app-settings';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const credentials = {
      email: email,
      password: password
    };

    return this.http.post(AppSettings.API_URL + '/users/login', credentials).map((user: any) => {
      if (user && user.token) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      return user;
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
