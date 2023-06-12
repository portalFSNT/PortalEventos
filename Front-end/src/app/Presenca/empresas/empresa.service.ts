import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.prod";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empresa } from "./empresa";

const API = environment;

@Injectable({
  providedIn: "root",
})
export class EmpresaService {
  private readonly API = `${API}/empresa`;
  constructor(private http: HttpClient) {}

  listar(): Observable<any> {
    return this.http.get(this.API);
  }

  cadastrarNovaEmpresa(novaEmpresa: Empresa) {
    return this.http.post(`${API}/empresa`, novaEmpresa);
  }

  edit(empresa: any, editaEmpresa: any): Observable<any> {
    return this.http.put<any>(`${API}/empresa/${empresa}`, editaEmpresa);
  }

  delet(empresa: any) {
    return this.http.delete(`${API}/empresa/${empresa}`);
  }
}
