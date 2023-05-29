import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../../authentication/token.service';

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class UsersPendingService {

  constructor(private tokenService : TokenService, private http: HttpClient) { }

  private readonly API = `${API}/userstatus`;
  private header = new HttpHeaders().set('Authorization', `Bearer ${this.tokenService.returnToken()}`);

  listUsersPending(): Observable<any> {
    return this.http.get<any>(this.API, {headers: this.header});
  }

}
