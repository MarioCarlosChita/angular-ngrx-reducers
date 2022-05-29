import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../model/contacto';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  pathUrl: String = "/contacto";
  constructor(private http: HttpClient) { }

  public listar(): Observable<Array<Contacto>>{
    return this.http.get<Array<Contacto>>(environment.URL + this.pathUrl);
  }

}
