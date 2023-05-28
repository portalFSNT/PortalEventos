import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    senha: new FormControl(null, Validators.required),
  });

  constructor(private router:Router) {}

  ngOnInit(): void{}

  irParaTipoCadastro() {
    this.router.navigate(['/type-register']);
  }

  irParaHome() {
    this.router.navigate(['/home']);
  }
}
