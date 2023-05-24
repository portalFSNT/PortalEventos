import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CadEventos } from './cad-eventos';

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class CadEventosService {

  constructor(private http: HttpClient) { }

  cadastrarEventos(novoCampo: CadEventos){
    return this.http.post(`${API}/events`, novoCampo)
  }
  cadastrarUsuario(novoUsuario: any){
    return this.http.post(`${API}/user`, novoUsuario)
  }
  enviarUsuario(enviarUsuario: any){
    return this.http.post(`${API}/login`, enviarUsuario)
  }
}
