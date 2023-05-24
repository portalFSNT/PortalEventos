import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadEventosService } from './cad-eventos.service';
import { CadEventos } from './cad-eventos';

@Component({
  selector: 'app-cad-eventos',
  templateUrl: './cad-eventos.component.html',
  styleUrls: ['./cad-eventos.component.scss', '../styles.scss']
})
export class CadEventosComponent implements OnInit {

  inputsCadEvent!:FormGroup;

  constructor(
    private FormBuilder:FormBuilder,
    private service: CadEventosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.inputsCadEvent = this.FormBuilder.group({
      nome: [''],
	    hora_inicio: [''],
	    hora_fim: [''],
	    data_inicio: [''],
	    descricao: [''],
      lugar:[''],
      tipo:['']
    })

  }

  enviarDados(){
    if(this.inputsCadEvent.valid){
      const novoCampo = this.inputsCadEvent.getRawValue() as CadEventos;
      this.service.cadastrarEventos(novoCampo).subscribe(()=>{
        this.router.navigate(['/']);
        console.log(novoCampo);
      },
      (error)=>{
        console.log('Erro inesperado')
      }
      );
    }
  }
  vazio(){

  }

  cancelar(){
    this.router.navigate(['/'])
  }

}
