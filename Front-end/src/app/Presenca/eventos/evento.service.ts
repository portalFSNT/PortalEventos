import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from './evento';


const API= environment;

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private readonly API=`${API}/evento`;
  constructor(private http:HttpClient) { }
  listar():Observable<any>{
    return this.http.get(this.API)

  }
listarUm(id_evento:any):Observable<any>{
  return this.http.get(`${API}/evento/${id_evento}`)
}
edit(id_evento:any,editarEvento:any){
  return this.http.put<any>(`${API}/evento/${id_evento}`,editarEvento)
}

  cadastrarNovoEvento(id_evento:any,novoEvento:Evento){
    return this.http.post(`${API}/evento/1`,novoEvento)
  }
}
