import { TokenService } from 'src/app/authentication/token.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class SolicitarService {
  private readonly API_SolicitarAgendamento=`${API}/solicitacao`;
  private readonly API_BuscarEspacos=`${API}/solicitacao/`;

  constructor(private http: HttpClient, private tokenService : TokenService) { }

  private header = new HttpHeaders().set('Authorization', `Bearer ${this.tokenService.returnToken()}`);

  solicitar(espacoSelecionado:number, data:string, horario_entrada:string, horario_saida:string, descricao:string):Observable<any>{

    return this.http.post<any>(this.API_SolicitarAgendamento, {
      id: espacoSelecionado,
      status_solicitacao: 1,
      data_solicitacao: '31/12/2022',
      quantidade: 20, 
      data_inicio: data,
      data_termino: '01/01/2023', 
      hora_inicio: horario_entrada, 
      horario_termino: horario_saida, 
      descricao: descricao,              
      id_usuario: 1
      }, {headers: this.header})
  }

  listarEspacos():Observable<any>{
  
    return this.http.get<any>(this.API_BuscarEspacos, { headers: this.header })
  }
  
}
