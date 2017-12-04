import { Injectable } from '@angular/core';
import { AppSettings } from '../../app-settings';
import { Response } from '@angular/http/src/static_response';
import { CustomHttp } from '../../helpers/custom-http';

@Injectable()
export class AuthService {

  constructor(private http: CustomHttp) { }

  login(email: string, password: string) {
    const credentials = {
      email: email,
      password: password
    };

    return this.http.post('/users/login', credentials).map(response => response.json()).map((user: any) => {
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
