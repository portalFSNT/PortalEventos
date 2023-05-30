import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewAdmService } from './new-adm.service';

@Component({
  selector: 'app-new-adm',
  templateUrl: './new-adm.component.html',
  styleUrls: ['./new-adm.component.scss']
})
export class NewAdmComponent {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
    private service: NewAdmService){
    this.form = this.fb.group({
      nome: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      email: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      senha: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      login: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      cargo: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      telefone: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      nivelAcesso: 1,
      statusUsuario: 1,
      instituicao: null
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('Submit');
      this.service.create(this.form.value).subscribe(
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
