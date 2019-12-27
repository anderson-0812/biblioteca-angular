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
}
