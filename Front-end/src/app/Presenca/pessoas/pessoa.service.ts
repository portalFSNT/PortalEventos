import { environment } from '../../../environments/environment';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Pessoa } from "./pessoa";

const API = environment;
@Injectable({
  providedIn: "root",
})
export class PessoaService {
  private readonly API = `${API}/convidados`;
  constructor(private http: HttpClient) {}

  listar(): Observable<any> {
    return this.http.get<any>(this.API);
  }

  cadastrarNovaPessoa(novaPessoa:Pessoa){
    return this.http.post(`${API}/convidados`,novaPessoa);
  }
  edit(nome:any,editaPessoa:any):Observable<any>{
    console.log(nome)
    return this.http.put<any>(`${API}/convidados/${nome}`,editaPessoa);
  }

  delet(nome:any){
    return this.http.delete(`${API}/convidados/${nome}`)
  }
}
