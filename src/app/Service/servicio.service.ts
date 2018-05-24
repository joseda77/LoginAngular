import { Injectable } from "@angular/core";
import {  Http } from '@angular/http';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class ServicioService{
    constructor(private http: Http){     
    }

    login(user:String,pws:String):Observable<any>{
        console.log(user,pws);
        return this.http.get('http://localhost:8080/WSEjemplo/rest/Usuario?login='+user+'&clave='+pws)
        .map(response => { return response.text()} );
    }
}