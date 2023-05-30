import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from 'src/app/authentication/token.service';

const API = environment.API;

@Injectable({
    providedIn: 'root'
})
export class ModalChangeDataUserService {

    constructor(private http: HttpClient){}

    private readonly API = `${API}/user`;

    getUser(email: string): Observable<any> { 
        return this.http.get<any>(`${this.API}/${email}`);
    }
}