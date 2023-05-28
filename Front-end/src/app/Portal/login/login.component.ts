import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../authentication/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  senha = '';
  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit(): void {}

  doLogin(): any{
    this.authservice.doLogin(this.email, this.senha).subscribe({
      next:()=> this.router.navigate(['/home']),
      error:(error)=>{
        alert('Email ou senha inválido.');
        console.log(error);
      },
    });
  }

  irParaTipoCadastro() {
    this.router.navigate(['/type-register']);
  }

}
