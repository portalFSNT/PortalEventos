import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Evento } from './evento';
import { TokenService } from 'src/app/authentication/token.service';


const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private readonly API=`${API}/evento`;
  constructor(private http: HttpClient, private tokenService : TokenService) { }

  private header = new HttpHeaders().set('Authorization', `Bearer ${this.tokenService.returnToken()}`);

  listar():Observable<any>{
    return this.http.get<any>(this.API, { headers: this.header });
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
