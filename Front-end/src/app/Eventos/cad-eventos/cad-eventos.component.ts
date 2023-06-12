
import { Router } from '@angular/router';
import { CadEventosService } from './cad-eventos.service';
import { CadEventos } from './cad-eventos';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoEvento } from './tipo';
import { Lugares } from './lugar';
import { Instituicoes } from './instituicao';

@Component({
  selector: 'app-cad-eventos',
  templateUrl: './cad-eventos.component.html',
  styleUrls: ['./cad-eventos.component.scss', '../styles.scss']
})
export class CadEventosComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  espacos: CadEventos[] = [];
  tipos: TipoEvento[] = [];
  lugares: Lugares[] = [];
  instituicoes: Instituicoes[] = [];

  constructor(private fb: FormBuilder,
    private service: CadEventosService) {

    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      descricao: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      data_inicio: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      data_termino: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      hora_inicio: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      hora_termino: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      id_usuario: 1,
      id_lugar: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      id_tipo: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      id_instituicao: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
    });
  }

  ngOnInit() {
    this.service.listarLugares().subscribe(({results}) => {
      this.lugares = results
      
      console.log(results)
      console.log(this.lugares)
    });
    this.service.listarInstituicoes().subscribe(({results}) => {
      this.instituicoes = results
      console.log(this.instituicoes)
    });
    this.service.listarTipos().subscribe(({results}) => {
      this.tipos = results
      console.log(this.tipos)
    });
  }

  onSubmit() {

  }
  onCancel() {
  }
}
