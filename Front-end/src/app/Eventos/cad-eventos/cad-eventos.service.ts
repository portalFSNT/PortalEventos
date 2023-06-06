import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CadEventos } from './cad-eventos';
import { TokenService } from 'src/app/authentication/token.service';
import { Observable } from 'rxjs';
import { TipoEvento } from './tipo';
import { MarransatoMode } from 'src/app/shared/MaranssatoMode.interface';



const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class CadEventosService {
  private readonly API_BuscarTipos=`${API}/tipos`;
  private readonly API_BuscarLugar=`${API}/instituicoes`;
  
  
  constructor(private http: HttpClient, private tokenService : TokenService) { }
    
  private header = new HttpHeaders().set('Authorization', `Bearer ${this.tokenService.returnToken()}`);

  cadastrarEventos(novoCampo: CadEventos){
    return this.http.post(`${API}/events`, novoCampo)
  }
  cadastrarUsuario(novoUsuario: any){
    return this.http.post(`${API}/user`, novoUsuario)
  }
  enviarUsuario(enviarUsuario: any){
    return this.http.post(`${API}/login`, enviarUsuario)
  }
  listarTipos():Observable<MarransatoMode<TipoEvento[]>>{
  
    return this.http.get<MarransatoMode<TipoEvento[]>>(this.API_BuscarTipos, { headers: this.header })
  }
  listarLugar():Observable<MarransatoMode<TipoEvento[]>>{
  
    return this.http.get<MarransatoMode<TipoEvento[]>>(this.API_BuscarLugar, { headers: this.header })
  }
}
