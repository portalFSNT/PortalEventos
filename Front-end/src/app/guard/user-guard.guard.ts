import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../authentication/authentication.service';
import { UserService } from '../authentication/user/user.service';
import { TokenService } from '../authentication/token.service';
import { User } from '../authentication/user/user';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class UserAdm implements CanActivate {

  
  constructor(public auth: AuthService, public router: Router, private userService: UserService, private tokenService: TokenService,
    ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole:[] = route.data['expectedRole'];
    // const token = localStorage.getItem('token');
    // decode the token to get its payload
    // const tokenPayload = this.userService.decodeJWT0();
    const token = this.tokenService.returnToken();
    const user = jwt_decode(token) as User;

    console.log(user)
    console.log(expectedRole.find((element:any) => element === user["nivelAcesso"])
    )

    if (
      // !this.auth.isAuthenticated() || 
      expectedRole.find((element:any) => element === user["nivelAcesso"])
    ) {

      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  
}
