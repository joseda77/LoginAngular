import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../Service/servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: String = '';
  pws: String = '';
  errorMessage:String = '';
  constructor(public servicio: ServicioService) {}

  ngOnInit() {}

  onLogin(){   
    this.servicio.login(this.userName,this.pws).subscribe(result => {
      alert("Usuario ingresado");
    },
      error => {
        console.log(<any>error);
    });
  }

}
