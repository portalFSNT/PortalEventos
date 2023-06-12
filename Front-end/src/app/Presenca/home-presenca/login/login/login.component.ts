import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login = '';
  senha = '';
 // constructor(private authService: AutenticacaoService, private router:Router) {}

  ngOnInit(): void {}
  
  //loginn(): any {
   // this.authService.autenticar(this.login, this.senha).subscribe({
   //   next: () => this.router.navigate(['home/listausuario']),
    //  error: (error) => {
    //    alert('Usuário ou senha inválido.');
    //    console.error(error);
    //  },
   // });
  }

