import { EmpresaService } from './../../empresas/empresa.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PessoaService } from './../pessoa.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { Empresa } from './empresa';

@Component({
  selector: 'app-nova-pessoa',
  templateUrl: './nova-pessoa.component.html',
  styleUrls: ['./nova-pessoa.component.scss']
})
export class NovaPessoaComponent implements OnInit {

  novaPessoaForm!:FormGroup;
listaPessoa:Empresa[]=[];
  constructor(
    private formBuilder:FormBuilder,
    private pessoaService:PessoaService,
    private empresaService:EmpresaService,
    private router:Router,
    private modalController:ModalController

  ) { }

  ngOnInit(): void {
    this.empresaService.listar().subscribe((event)=>{
      this.listaPessoa= event.result as Empresa[];
      console.log(this.listaPessoa)
    })
    this.novaPessoaForm=this.formBuilder.group({
      nome:[''],
      cargo :[''],
      empresa:[''],
      email:[''],
      telefone:[''],
    })
  }
  cadastrar(){
    console.log(this.novaPessoaForm)
    if(this.novaPessoaForm.valid){
      const novaPessoa=this.novaPessoaForm.getRawValue() as Pessoa;
      this.pessoaService.cadastrarNovaPessoa(novaPessoa).subscribe(
        ()=>{this.router.navigate(['/convidados']);
      },
      (error)=>{
        console.log(error)
      },
      );
    }
  }
  adicionar(){
    this.modalController.dismiss();
  }
cancelar(){
  this.modalController.dismiss();
}
}
