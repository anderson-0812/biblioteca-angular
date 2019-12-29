import { Login } from './../../models/login/login';
// Importamos Routes ActivatedRoute NgForm el modelo y el servicio
import { User } from './../../models/user/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user/user.service';
import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title: string;
  public user: User;
  public state: string;
  public identity;
  public token;

  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService ) {
    this.title = 'Login';
    this.user = new User();
  }

  ngOnInit() {
    console.log('!Componente Login Cargado');
  }

  // Creamos el login apra ser usadod esde el componente html
  login(form: NgForm) {
    console.log('Prueba Front Login');
    this.loginService.login(this.user).subscribe((res) => {
      console.log('Res de login en componet');
      console.log(res);
      this.identity = res.user;

      if (!this.identity || !this.identity._id) {
        this.state = 'error';
      } else {
        localStorage.setItem('identity', JSON.stringify(this.identity));
        this.getToken();
      }
      // redireccionamos
      this.router.navigate(['home']);
    }, (error) => {
      console.log(error as any);
      console.log('End method');
    });
  }

  getToken() {
    this.loginService.login(this.user, 'true').subscribe((res) => {
      this.token = res.token;

      if (this.token.length <= 0) {
        this.state = 'error';
      } else {
        localStorage.setItem('token', this.token);
        this.getToken();
      }
    }, (error) => {
      const mensajeError = error as any;
      console.log(mensajeError);

      if (mensajeError != null) {
        this.state = 'error';
      }
    });
  }
}
