import { Component, OnInit } from '@angular/core';
import { Cliente} from '../cliente';
import { ServicioService } from '../Service/servicio.service';

@Component({
  selector: 'app-listaclientes',
  templateUrl: './listaclientes.component.html',
  styleUrls: ['./listaclientes.component.css']
})
export class ListaclientesComponent implements OnInit {
  clientes:  Cliente[];
  constructor(public servicio: ServicioService) {
    servicio.getClientes().subscribe(result => {
      var obj = JSON.parse(result);
      this.clientes = obj.clienteWS;
    });
  }

  ngOnInit() {
  }

  onNuevo(){
    this.servicio.getClientes().subscribe(result => {
      alert(result);
      var obj = result;
      this.clientes = obj.clientesWS;
    })
  }


}
