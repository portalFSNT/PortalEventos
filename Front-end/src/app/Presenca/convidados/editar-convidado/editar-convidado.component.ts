import { Router } from '@angular/router';
import { ConvidadoService } from './../convidado.service';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit ,Input} from '@angular/core';
import { Pessoa } from '../lista-convidados/pessoa';

@Component({
  selector: 'app-editar-convidado',
  templateUrl: './editar-convidado.component.html',
  styleUrls: ['./editar-convidado.component.scss']
})
export class EditarConvidadoComponent implements OnInit {

editarConvidadoForm!:FormGroup;
listaConvidado:Pessoa[]=[];
  @Input() id_evento:any
  @Input() nome:any
  @Input() condicao:any
  @Input() anunciados:any
  @Input() presenca:any
 
  constructor(
    private convidadoService:ConvidadoService,
    private formBuilder:FormBuilder,
    private router:Router,
    private modalController:ModalController
  ) { }

  
  ngOnInit(): void {
    this.convidadoService.listarUmConvidado(this.id_evento,this.nome).subscribe((event)=>{
      this.listaConvidado=event.result as Pessoa[];
    })
    this.editarConvidadoForm = this.formBuilder.group({
  
      id_evento:this.id_evento,
      nome:this.nome,
      condicao:this.condicao,
      anunciados:this.anunciados,
      presenca:this.presenca,
     
    })
    console.log(this.id_evento,this.nome,this.condicao,this.anunciados,this.presenca)
  }
  editar(){
    if(this.editarConvidadoForm.valid){
      const editarConvidado = this.editarConvidadoForm.getRawValue() as Pessoa;
      this.convidadoService.editP(this.id_evento,editarConvidado).subscribe(()=>{
        this.router.navigate([`evento_convidados/${this.id_evento}`])
      })
    }
    
  }
cancelar(){ this.modalController.dismiss()}
salvar(){
  this.modalController.dismiss()
}
}
