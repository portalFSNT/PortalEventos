import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';

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

    updateUser(email:string, user:any){
        console.log(user);
        return this.http.patch(`${this.API}/${email}`,user).pipe(take(1));
    }
}