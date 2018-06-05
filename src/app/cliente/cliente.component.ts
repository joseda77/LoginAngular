import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ServicioService } from '../Service/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  cliente: Cliente = {
    cedula: '',
    nombres: '',
    apellidos: '',
    correoElectronico: ''
  };
  errorMessage: String = '';
  constructor(public servicio: ServicioService, public routes: Router) { }
  ngOnInit() {
  }

  onGuardar() {
    this.servicio.guardarCliente(this.cliente).subscribe(result => {
      if (result === '') {
      this.routes.navigate(['/listaclientes']);
      } else {
        this.errorMessage = result;
      }
    });
  }
}
