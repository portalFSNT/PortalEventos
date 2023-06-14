import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empresa } from "./empresa";
import { TokenService } from "src/app/authentication/token.service";

const API = environment.API;

@Injectable({
  providedIn: "root",
})
export class EmpresaService {

  constructor(
    private tokenService: TokenService,
    private http: HttpClient
  ) {}

  private readonly API = `${API}/empresas`;
  private header = new HttpHeaders().set('Authorization',`Bearer ${this.tokenService.returnToken()}`);

  listar(): Observable<any> {
    return this.http.get(`${this.API}`,{headers: this.header});
  }

  cadEmpresa(novaEmpresa: string) {
    console.log(novaEmpresa)
    return this.http.post(`${this.API}`,novaEmpresa,{headers: this.header});
  }

  edit(empresa: any, editaEmpresa: any): Observable<any> {
    return this.http.put<any>(`${this.API}/${empresa}`, editaEmpresa,{headers: this.header});
  }

  delet(empresa: any) {
    return this.http.delete(`${this.API}/${empresa}`,{headers: this.header});
  }
}
