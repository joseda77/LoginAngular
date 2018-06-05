import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../Service/servicio.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: String = '';
  pws: String = '';
  errorMessage: String = '';
  constructor(public servicio: ServicioService, public routes: Router) {}

  ngOnInit() {}

  onLogin() {
    this.servicio.login(this.userName, this.pws).subscribe(result => {
      if (result === '') {
        this.userName = '';
        this.pws = '';
        this.routes.navigate(['../listaclientes']);
      } else {
        this.userName = '';
        this.pws = '';
        this.errorMessage = result;
      }
    },
      error => {
        console.log('Este es el error  del frontend ' + <any>error);
    });
  }

}
