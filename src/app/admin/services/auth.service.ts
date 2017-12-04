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

  loginByGoogle(user: any) {
    console.log("BY GOGLE");
    this.http.post(AppSettings.API_URL + '/users/login/google', user).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
    // console.log(3, user);
    // if (!user) {
    //   return;
    // }
    // this.http.post(AppSettings.API_URL + '/users/login/google', user.token).map((u: any) => {
    //   if (u) {
    //     localStorage.setItem('currentUser', JSON.stringify(u));
    //   }
    //   return u;
    // });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
