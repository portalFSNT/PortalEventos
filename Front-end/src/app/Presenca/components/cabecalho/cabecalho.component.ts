import { Router } from '@angular/router';
//import { UsuariosService } from '../../home-presenca/usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
 export class CabecalhoComponent /* implements OnInit */{

  //user$=this.usuariosService.retornaUsuario();

  constructor( 
    //private usuariosService:UsuariosService,
    private router:Router
     ) { }

  // ngOnInit(): void {
  // }
logout(){
 // this.usuariosService.logout();
  this.router.navigate(['']);
}

}
