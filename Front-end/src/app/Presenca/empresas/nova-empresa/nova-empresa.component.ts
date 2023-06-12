import { EmpresaService } from './../empresa.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Empresa } from '../empresa';

@Component({
  selector: 'app-nova-empresa',
  templateUrl: './nova-empresa.component.html',
  styleUrls: ['./nova-empresa.component.scss']
})
export class NovaEmpresaComponent implements OnInit {

  novaEmpresaForm!:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private NovaEmpresaService:EmpresaService,
    private router:Router,
    private modalController:ModalController

  ) { }

  ngOnInit(): void {
    this.novaEmpresaForm=this.formBuilder.group({
      empresa:[''],
    })

  }
  cadastrar(){
    if(this.novaEmpresaForm.valid){
      const novaEmpresa = this.novaEmpresaForm.getRawValue() as Empresa;
      this.NovaEmpresaService.cadastrarNovaEmpresa(novaEmpresa).subscribe(
        ()=>{this.router.navigate(['/empresas']);
      },
      (error)=>{
        console.log(error);
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
