import { Injectable } from '@angular/core';
import { Global} from './api.url'
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  private url : string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  obtener(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get('https://jsonplaceholder.typicode.com/users',{headers: headers});
    //return this._http.get(this.url+'/login',{headers: headers});
  }

}
