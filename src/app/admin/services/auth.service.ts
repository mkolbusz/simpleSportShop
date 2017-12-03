import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    localStorage.setItem('currentUser', email);
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}