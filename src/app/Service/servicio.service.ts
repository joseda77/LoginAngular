import { Injectable } from '@angular/core';
import { Usuario } from '../Class/usuario.class';
import {  Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Cliente } from '../cliente';

@Injectable()
export class ServicioService {
    nombreUsuario: String = '';

    constructor(private http: Http) {
    }

    login(user: String, pws: String): Observable<any> {
        return this.http.get('http://localhost:8080/WSEjemplo/rest/Usuario?login=' + user + '&clave=' + pws)
        .map(Response => {
          this.nombreUsuario = user;
          return Response.text(); } );
    }

    getClientes(): Observable<any> {
        return this.http.get('http://localhost:8080/WSEjemplo/rest/Cliente')
        .map(Response => {
          return Response.text();
        } );
    }

    guardarCliente(cliente: Cliente): Observable<any> {
      const url = 'http://localhost:8080/WSEjemplo/rest/Cliente?cedula=' + cliente.cedula + '&nombres=' + cliente.nombres +
        '&apellidos=' + cliente.apellidos + '&email=' + cliente.correoElectronico + '&usuario=' + this.nombreUsuario ;
      return this.http.post(url, {}).map(Response => {
        return Response.text(); });
    }
}
