import { UsuariosService } from "../usuarios.service";
import { Usuario } from "./../usuario";

import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, Input, OnInit } from "@angular/core";
@Component({
  selector: "app-editar-usuario",
  templateUrl: "./editar-usuario.component.html",
  styleUrls: ["./editar-usuario.component.scss"],
})
export class EditarUsuarioComponent implements OnInit {
  editarUsuarioForm!: FormGroup;
  @Input() id_login: any;
  @Input() login: any;
  @Input() perfil: any;
  @Input() email: any;

  @Input() telefone: any;
  output: any;

  // usuarios:NovoUsuario={

  // }

  constructor(
    private formBuilder: FormBuilder,
    private service: UsuariosService,
    private router: Router,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.editarUsuarioForm=this.formBuilder.group({
     login: this.login,
     perfil:this.perfil,
      email:this.email,
  
    telefone:  this.telefone,


    })
  }

  editar(){
    if(this.editarUsuarioForm.valid){
      const editarUsuario=this.editarUsuarioForm.getRawValue() as Usuario;
      this.service.edit(this.id_login,editarUsuario).subscribe(()=>this.router.navigate(['/home/listausuario']))
    }
  }

  salvar(){    this.modalController.dismiss();}

  cancelar(){    this.modalController.dismiss();}
}
