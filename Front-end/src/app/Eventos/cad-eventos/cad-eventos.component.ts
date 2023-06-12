
import { Router } from '@angular/router';
import { CadEventosService } from './cad-eventos.service';
import { CadEventos } from './cad-eventos';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoEvento } from './tipo';
import { Lugar } from './lugar';

@Component({
  selector: 'app-cad-eventos',
  templateUrl: './cad-eventos.component.html',
  styleUrls: ['./cad-eventos.component.scss', '../styles.scss']
})
export class CadEventosComponent implements OnInit {

  // inputsCadEvent!:FormGroup;
  // submitted = false;

  // constructor(
  //   private FormBuilder:FormBuilder,
  //   private service: CadEventosService,
  //   private router: Router
  // ) { }

  // ngOnInit(): void {
  //   this.inputsCadEvent = this.FormBuilder.group({

  //     nome: [''],
  //     descricao: [''],
  //     data_inicio: [''],
  //     data_termino: [''],
  //     hora_inicio:[''],
  //     hora_termino: [''],
  //     id_usuario:['1'],
  //     id_lugar:['5'],
  //     id_tipo:['2'],
  //     id_instituicao:['2']
  //   })

  // }

  form: FormGroup;
  submitted = false;
  espacos: CadEventos[] = [];
  tipos: TipoEvento[] = [];
  lugar: Lugar[] = [];
  espacoSelecionado: string = "0";

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
    this.service.listarTipos().subscribe(({results}) => {
      this.tipos = results
      console.log(this.tipos)
    })
    this.service.listarLugar().subscribe(({results}) => {
      this.lugar = results
      console.log(this.lugar)
    })
  }
  onSubmit() {

  }
  onCancel() {
  }
}
