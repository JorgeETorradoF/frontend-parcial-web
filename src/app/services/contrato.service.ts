import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  private apiUrl = 'http://localhost/api/contratos'; 

  constructor(private http: HttpClient) { }


  obtenerTodosLosContratos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }


  insertarContrato(contrato: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contrato);
  }
}
