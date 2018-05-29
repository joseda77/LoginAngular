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
  errorMessage:String = '';
  constructor(public servicio: ServicioService, public routes: Router) {}

  ngOnInit() {}

  onLogin(){   
    this.servicio.login(this.userName,this.pws).subscribe(result => {
      this.routes.navigate(['../clientes']);
    },
      error => {
        console.log("Este es el error  del frontend "+<any>error);
    });
  }

}
