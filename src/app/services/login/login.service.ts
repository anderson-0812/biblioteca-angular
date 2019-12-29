import { Global } from './../global';
import { Injectable } from '@angular/core';
// importamos librerias para peticiones http ademas de un observable para petisiones asincronas
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { User } from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public url: string;
  public userSelected: User;
  public identity;
  public token;

  constructor(public http: HttpClient) {
    this.userSelected = new User();
    this.url =  Global.url;
  }

  // Login
  login(user, token = null): Observable<any> {
    console.log('Prueba Login');
    console.log(user);

    if (token != null) {
      user.token = token;
    }

    const params = JSON.stringify(user);
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization');

    return this.http.post(this.url + 'login', params, {headers});

  }

  getIdentity() {
    // de mi json extraigo el campo identidad
    const identity = JSON.parse(localStorage.getItem('identity'));

    if (identity !== 'undefined') {
      this.identity = identity;
    } else {
      this.identity = null;
    }

    return this.identity;
  }
  getToken() {
    // localstorage es una memoria delnavegador
    const token = localStorage.getItem('token'); // almacena en el navegador el token

    if (token !== 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }

    return this.token;
  }
}
