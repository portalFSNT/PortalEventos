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
  private readonly API = `${API}/convidado`;
  constructor(private http: HttpClient, private tokenService : TokenService) {}

  private header = new HttpHeaders().set('Authorization', `Bearer ${this.tokenService.returnToken()}`);

  listar(): Observable<any> {
    return this.http.get<any>(`${this.API}s`, { headers: this.header });
  }

  cadPessoa(reqBody:Pessoa){
    return this.http.post(`${this.API}`,reqBody, {headers: this.header});
  }
  updatePessoa(id: number,reqBody: any):Observable<any>{
    console.log(reqBody)
    return this.http.patch<any>(`${this.API}/${id}`,reqBody, {headers: this.header});
  }

  delet(id:number){
    return this.http.delete(`${this.API}/${id}`, {headers: this.header})
  }
}
