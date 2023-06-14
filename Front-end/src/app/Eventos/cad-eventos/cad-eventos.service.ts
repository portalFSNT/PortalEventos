import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CadEventos } from './cad-eventos';
import { TokenService } from 'src/app/authentication/token.service';
import { Observable, switchMap, take } from 'rxjs';
import { TipoEvento } from './tipo';
import { Lugares } from './lugar';
import { Instituicoes } from './instituicao';
import { MarransatoMode } from 'src/app/shared/MaranssatoMode.interface';
import { UserService } from 'src/app/authentication/user/user.service';




const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class CadEventosService {
  private readonly API_BuscarTipos = `${API}/tipos`;
  private readonly API_BuscarInstituicoes = `${API}/instituicoes`;
  private readonly API_BuscarLugares = `${API}/lugar`;


  constructor(private http: HttpClient, private tokenService : TokenService, private userService: UserService) { }

  private header = new HttpHeaders().set('Authorization', `Bearer ${this.tokenService.returnToken()}`);

  private getHeader(): HttpHeaders {
    const token = this.tokenService.returnToken();
    const userId = this.userService.returnUser().value.id || 0;
  
    return new HttpHeaders().set('Authorization', `Bearer ${token}`).set('X-User-ID', userId.toString());
  }

  create(novoCampo: CadEventos) {
    const header = this.getHeader();
  
    return this.userService.returnUser().pipe(
      take(1),
      switchMap(user => {
        const userId = user.id;
        const params = { ...novoCampo, id_usuario: userId }; // Adicione o id_usuario ao objeto novoCampo
  
        return this.http.post<any>(`${API}/event`, params, { headers: header }); // Use o header atualizado
      })
    );
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
