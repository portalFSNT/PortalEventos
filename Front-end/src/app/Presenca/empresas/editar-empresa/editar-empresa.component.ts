import { EmpresaService } from './../empresa.service';

import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit,Input } from '@angular/core';
import { Empresa } from '../nova-empresa/empresa';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.scss']
})
export class EditarEmpresaComponent implements OnInit {

  editarEmpresaForm!:FormGroup;


@Input() empresa:any
@Input() empresas:any

output:any;

 
  constructor(
    private formBuilder:FormBuilder,

    private router:Router,
    private modalController:ModalController,
    private service:EmpresaService
  ) { }

  ngOnInit(): void {
    console.log(this.editarEmpresaForm)
    this.editarEmpresaForm=this.formBuilder.group({empresa:this.empresa})
    }
   
  
  editar(){
    if(this.editarEmpresaForm.valid){
      const editaEmpresa = this.editarEmpresaForm.getRawValue() as Empresa;
      this.service.edit(this.empresa,editaEmpresa).subscribe(()=>{this.router.navigate(['empresas'])})
    }
  
  }


  salvar(){    this.modalController.dismiss();}

  cancelar(){    this.modalController.dismiss();}
}
