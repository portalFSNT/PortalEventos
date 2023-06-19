import { EmpresaService } from './../empresa.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Empresa } from '../empresa';

@Component({
  selector: 'app-nova-empresa',
  templateUrl: './nova-empresa.component.html',
  styleUrls: ['./nova-empresa.component.scss', '../../styles/styles.scss']
})
export class NovaEmpresaComponent implements OnInit {

  form!:FormGroup;
  submitted = false;

  constructor(
    private fb:FormBuilder,
    private novaEmpresa:EmpresaService,
    private router:Router,
    private modalController:ModalController
  ){ 
    this.form = this.fb.group({
      nome: String,
    });
  }

  ngOnInit(){
    this.form=this.fb.group({
      nome:['',[Validators.required, Validators.minLength(3), Validators.maxLength(80)]]
    })

  }

  cadastrar(){
    if (this.form.valid){
      this.novaEmpresa.cadEmpresa(this.form.value).subscribe;
    }
  }

  adicionar(){
    this.modalController.dismiss();
  }
  cancelar(){ 
    window.location.reload();
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('Submit');
      this.novaEmpresa.cadEmpresa(this.form.value).subscribe(
        sucess => console.log('Sucesso'),
        error => console.log('Error'),
        () => console.log('Rquest Completo')
      );
      window.location.reload();
    }
  }
  
}
