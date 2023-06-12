import { UsuariosService } from './../usuarios.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Usuario } from '../usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private NovoUsuarioService:UsuariosService,
    private router:Router,
    private modalController:ModalController
    ) { }

   ngOnInit(): void {
    this.novoUsuarioForm=this.formBuilder.group({
      login:[''],
      senha:['',],
      perfil:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      telefone:[''],

    })
  }
 cadastrar(){
  if(this.novoUsuarioForm.valid){
  const novoUsuario = this.novoUsuarioForm.getRawValue() as Usuario;
  this.NovoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(
    ()=>{this.router.navigate(['/home/listausuario']);
  },
  (error)=>{
    console.log(error);
    },
  );
  
}}

adicionar(){
  this.modalController.dismiss();
}
cancelar(){
  this.modalController.dismiss();

}
}
