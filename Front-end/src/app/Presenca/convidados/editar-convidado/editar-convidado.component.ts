//ANGULAR -----
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit ,Input} from '@angular/core';
//MODAL -----
import { ModalController } from '@ionic/angular';
//SERVICE -----
import { ConvidadoService } from './../convidado.service';
//INTERFACE -----
import { Pessoa } from '../lista-convidados/pessoa';

@Component({
  selector: 'app-editar-convidado',
  templateUrl: './editar-convidado.component.html',
  styleUrls: ['./editar-convidado.component.scss', '../../styles/styles.scss']
})
export class EditarConvidadoComponent implements OnInit {

form!:FormGroup;
listaConvidado:Pessoa[]=[];
  @Input() id_evento:any
  @Input() id_convidado:any
  @Input() condicao:any
  @Input() anunciados:any
  @Input() presenca:any
 
  constructor(
    private convidadoService:ConvidadoService,
    private fb:FormBuilder,
    private router:Router,
    private modalController:ModalController
  ) { }

  
  ngOnInit(): void {
    this.convidadoService.listOneConvidado(this.id_evento).subscribe((event)=>{
      this.listaConvidado=event.results as Pessoa[];
    })
    this.form = this.fb.group({
      id_evento:this.id_evento,
      id_convidado:this.id_convidado,
      condicao:this.condicao,
      anunciados:this.anunciados,
      presenca:this.presenca,
     
    })
    console.log(this.id_evento,this.id_evento,this.condicao,this.anunciados,this.presenca)
  }
  editar(){
    if(this.form.valid){
      const editarConvidado = this.form.getRawValue() as Pessoa;
      this.convidadoService.editConvidado(this.id_evento,editarConvidado).subscribe(()=>{
        this.router.navigate([`evento_convidados/${this.id_evento}`])
      })
    }
  }

  cancelar(){ this.modalController.dismiss()}
  salvar(){
    this.modalController.dismiss()
  }
}
