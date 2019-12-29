import { User } from './../../models/user/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './../global';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;
  public userSelected: User;
  public users: User[];

  constructor(public http: HttpClient) {
    this.userSelected = new User();
    this.url = Global.url; // llamamos a la variables de la clase global q creamos
  }

}
