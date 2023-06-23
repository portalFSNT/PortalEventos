//ANGULAR -----
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConvidadoService } from './../convidado.service';
import { Component, OnInit,Input } from '@angular/core';
//INTERFACES -----
import { Convidado } from '../convidado';
import { Pessoa } from '../lista-convidados/pessoa';

@Component({
  selector: 'app-novo-convidado',
  templateUrl: './novo-convidado.component.html',
  styleUrls: ['./novo-convidado.component.scss', '../../styles/styles.scss']
})
export class NovoConvidadoComponent implements OnInit {

  form!:FormGroup;
  list!: any[];
  pessoa!: Convidado[];
  submitted = false;

@Input() id_evento: number | undefined
  constructor(
    private fb:FormBuilder,
    private service:ConvidadoService,
    private modalController:ModalController,
  ) { }

  ngOnInit(){
    if(this.list && this.list.length > 0){
      this.id_evento = this.list[0];
      console.log('EVENTO_ID - '+this.id_evento)
    }

    this.form=this.fb.group({
      condicao: 0,
      anunciados: [Number],
      presenca: 0,
      id_convidado: [Number],
      id_presenca: this.id_evento,
    });

    this.service.listPessoa().subscribe(
      (results) => {
        this.pessoa = results.result;
        console.log('Lista de Pessoas: '+this.pessoa); 
      },
      (error) => {
        console.error(error)
      }
    )

  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('Submit');
      this.service.cadastrarConvidado(this.form.value).subscribe(
        sucess => console.log('Sucesso'),
        error => console.log('Error'),
        () => console.log('Requisição Finalizada.')
      );
      // window.location.reload();
    }
  }

  // cadastrar(){
  //   if(this.form.valid){
  //     const novoConvidado= this.form.getRawValue();
  //     this.servie.cadastrarconvidado(this.id_evento,novoConvidado).subscribe(
  //       ()=>{this.router.navigate([`/evento_convidados/${this.id_evento}`])},
  //       (error:any)=>{
  //         console.log(error)
  //       }
  //     )
  // }}
  salvar(){this.modalController.dismiss()}
  cancelar(){ this.modalController.dismiss()}
}
