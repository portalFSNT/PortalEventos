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
  submitted = false;

  constructor(
    private FormBuilder:FormBuilder,
    private service: CadEventosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.inputsCadEvent = this.FormBuilder.group({

      nome: [''],
      descricao: [''],
      data_inicio: [''],
      data_termino: [''],
      hora_inicio:[''],
      hora_termino: [''],
      id_usuario:['1'],
      id_lugar:['5'],
      id_tipo:['2'],
      id_instituicao:['2']
    })

  }


  onSubmit() {
    this.submitted = true;
    console.log(this.inputsCadEvent.value);
    if (this.inputsCadEvent.valid) {
      console.log('Submit');
      this.service.cadastrarEventos(this.inputsCadEvent.value).subscribe(
        () => console.log('Rquest Completo')
      );
    }
  }
  onCancel() {
    this.submitted = false;
    this.inputsCadEvent.reset();
    // console.log("Cancel")
  }

}
