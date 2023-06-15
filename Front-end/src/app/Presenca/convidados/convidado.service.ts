import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/authentication/token.service';

const API = environment;
@Injectable({
  providedIn: 'root'
})
export class ConvidadoService {
private readonly API= `${API}`

  constructor(
    private tokenservice: TokenService,
    private http:HttpClient
  ) { }
  
  listarStatus(id_evento:any):Observable<any>{
    return this.http.get<any>(`${API}/evento/${id_evento}`)
  }
  listPessoa(id_evento:any):Observable<any>{
    return this.http.get<any>(`${API}/evento_convidados/${id_evento}`)
  }
  listar():Observable<any>{
    return this.http.get<any>(`${this.API}/convidados`)
  }
  listarUmConvidado(id_evento:any,nome:any):Observable<any>{
    return this.http.get<any>(`${API}/evento_convidados/${id_evento}`,nome)
  }


  edit(id_evento:any,evento:any):Observable<any>{
    return this.http.put<any>(`${API}/evento/${id_evento}`,evento)

  }
  editP(id_evento:any,editarConvidado:any){
    return this.http.put(`${API}/evento_convidados/${id_evento}`,editarConvidado)

  }
  cadastrarconvidado(id_evento:any,novoConvidado:any){
   return this.http.post(`${API}/evento_convidados/${id_evento}`,novoConvidado)
  }

 buscar:any=(id_evento:any)=>{
    return this.buscar(`${API}/${id_evento}`)

  }



  delet(id_evento:any){
    return this.http.delete(`${API}/evento/${id_evento}`)
  }
  deletP(nome:any,id_evento:any){
    return this.http.delete(`${API}/evento_convidados/${id_evento}`,{body:{nome}})
  }
}
