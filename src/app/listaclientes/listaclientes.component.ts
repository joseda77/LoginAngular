import { Component, OnInit } from '@angular/core';
import { Cliente} from '../cliente';
import { ServicioService } from '../Service/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listaclientes',
  templateUrl: './listaclientes.component.html',
  styleUrls: ['./listaclientes.component.css']
})
export class ListaclientesComponent implements OnInit {
  clientes:  Cliente[] = [];
  constructor(public servicio: ServicioService, public routes: Router) {
    servicio.getClientes().subscribe(result => {
      const obj = JSON.parse(result); // Depronto saca error por el const, cambiar por var
      this.clientes = obj.clienteWS;
    });
  }

  ngOnInit() {
  }

  onNuevo() {
    this.routes.navigate(['/nuevoCliente']);
    this.servicio.getClientes().subscribe(result => {
      alert(result);
      const obj = result;
      this.clientes = obj.clientesWS;
    });
  }


}
