import { Injectable } from '@angular/core';
import { AppSettings } from '../../app-settings';
import { Response } from '@angular/http/src/static_response';
import { ActivatedRoute } from '@angular/router';
import { AuthHttp } from '../../common/helpers/custom-http';

@Injectable()
export class AuthService {

  constructor(private http: AuthHttp, private router: ActivatedRoute) { }

  login(email: string, password: string) {
    const credentials = {
      username: email,
      password: password
    };

    return this.http.post('/api/auth/login', credentials).map(response => response.json()).map((res: any) => {
      if (res && res.token) {
        localStorage.setItem('currentUser', JSON.stringify(res.user));
        localStorage.setItem('token', JSON.stringify(res.token));
      }
      return res.user;
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  loginWithGoogle(user) {
    return this.http.post('/api/auth/login/google', user).map(response => response.json()).map((res: any) => {
      console.log(res);
    });
  }
}
