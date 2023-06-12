import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) { }
  


  irParaTipoCadastro() {
    this.router.navigate(['/type-register']);
  }

  irParaHome() {
    this.router.navigate(['/home']);
  }
}
