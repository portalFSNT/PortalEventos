import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class UsersPendingService {

  constructor(private http: HttpClient) { }

  private readonly API = `${API}/users`;

  listUsersPending(): Observable<any> {
    return this.http.get<any>(this.API);
  }

}
