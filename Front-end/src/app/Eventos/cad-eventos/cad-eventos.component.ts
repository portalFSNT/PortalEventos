
import { Router } from '@angular/router';
import { CadEventosService } from './cad-eventos.service';
import { CadEventos } from './cad-eventos';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cad-eventos',
  templateUrl: './cad-eventos.component.html',
  styleUrls: ['./cad-eventos.component.scss', '../styles.scss']
})
export class CadEventosComponent {

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

  constructor(private fb: FormBuilder,
    private service: CadEventosService){

    this.form = this.fb.group({
      nome: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      descricao: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      data_inicio: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      data_termino: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      hora_inicio: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      hora_termino: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      id_usuario: 1,
      id_lugar:[null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      id_tipo:[null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      id_instituicao:[null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('Submit');
      this.service.cadastrarEventos(this.form.value).subscribe(
        sucess => console.log('Sucesso'),
        error => console.log('Error'),
        () => console.log('Rquest Completo')
      );
    }
  }
  onCancel() {
    this.submitted = false;
    this.form.reset();
    // console.log("Cancel")
  }

}
