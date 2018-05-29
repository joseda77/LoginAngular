import { Injectable } from "@angular/core";
import { Usuario } from '../Class/usuario.class';
import {  Http } from '@angular/http';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class ServicioService{
    constructor(private http: Http){     
    }

    login(user:String,pws:String):Observable<any>{
        return this.http.get('http://localhost:8080/WSEjemplo/rest/Usuario?login='+user+'&clave='+pws)
        .map(Response => {return Response.text()});
    }

    getClientes():Observable<any>{
        return this.http.get('http://localhost:8080/WSEjemplo/rest/Cliente')
        .map(Response => {return Response.text()});
    }
}