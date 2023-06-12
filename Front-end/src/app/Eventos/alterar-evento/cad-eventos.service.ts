import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CadEventos } from './cad-eventos';
import { TokenService } from 'src/app/authentication/token.service';
import { Observable } from 'rxjs';
import { TipoEvento } from './tipo';
import { Lugares } from './lugar';
import { Instituicoes } from './instituicao';
import { MarransatoMode } from 'src/app/shared/MaranssatoMode.interface';



const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class CadEventosService {
  private readonly API_BuscarTipos = `${API}/tipos`;
  private readonly API_BuscarInstituicoes = `${API}/instituicoes`;
  private readonly API_BuscarLugares = `${API}/lugar`;


  constructor(private tokenService : TokenService, private http: HttpClient) { }

  private header = new HttpHeaders().set('Authorization', `Bearer ${this.tokenService.returnToken()}`);

  create(id: number) {
    return this.http.post(`${API}/events/${id}`, { headers: this.header })
  }



  listarTipos(): Observable<MarransatoMode<TipoEvento[]>> {
    return this.http.get<MarransatoMode<TipoEvento[]>>(this.API_BuscarTipos, { headers: this.header })
  }


  listarInstituicoes(): Observable<MarransatoMode<Instituicoes[]>> {  
    return this.http.get<MarransatoMode<Instituicoes[]>>(this.API_BuscarInstituicoes, { headers: this.header })
  }
  
  listarLugares(): Observable<MarransatoMode<Lugares[]>> {  
    return this.http.get<MarransatoMode<Lugares[]>>(this.API_BuscarLugares, { headers: this.header })
  }



 

}
