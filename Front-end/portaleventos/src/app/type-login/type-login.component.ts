import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-login',
  templateUrl: './type-login.component.html',
  styleUrls: ['./type-login.component.css']
})


export class TypeLoginComponent {

  constructor(private router: Router) { }
  irParaCadastro() {


    this.router.navigate(['/register']);
  }
}
