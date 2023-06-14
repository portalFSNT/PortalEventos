import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pessoa } from "./pessoa";
import { TokenService } from 'src/app/authentication/token.service';

const API = environment.API;
@Injectable({
  providedIn: "root",
})
export class PessoaService {
  private readonly API = `${API}/convidados`;
  constructor(private http: HttpClient, private tokenService : TokenService) {}

  private header = new HttpHeaders().set('Authorization', `Bearer ${this.tokenService.returnToken()}`);

  listar(): Observable<any> {
    return this.http.get<any>(this.API, { headers: this.header });
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
