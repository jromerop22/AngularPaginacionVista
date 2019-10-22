import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../modelos/usuario";
import { Global } from './api.url';

@Injectable()
export class UsuarioService {
  private url : string;

  constructor(private _http : HttpClient) {
    this.url = Global.url;
  }

  acceder(user) : Observable<any>{
    let parametros = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'/login',parametros,{headers: headers});
  }
}
