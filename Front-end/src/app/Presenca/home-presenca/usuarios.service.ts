import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';


const API= environment;

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  retornaUsuario: any;
  logout() {
    throw new Error('Method not implemented.');
  }
  private  readonly API = `${API}/usuario`

  constructor(private http:HttpClient) { }

listar():Observable<any>{
  return this.http.get<any>(this.API)
}

cadastraNovoUsuario(novoUsuario:Usuario){
  return this.http.post(`${API}/usuario`,novoUsuario)
}

edit(id_login:any,editarUsuario:any):Observable<any>{
  return this.http.put<any>(`${API}/usuario/${id_login}`,editarUsuario)
}
delet(id_login:any){
  return this.http.delete(`${API}/usuario/${id_login}`)
}


}
