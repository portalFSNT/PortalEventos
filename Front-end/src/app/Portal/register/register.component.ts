import { RegisterService } from './register.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: FormGroup;
  submitted = false;

  constructor(private router: Router, private fb: FormBuilder,
    private service: RegisterService){
    this.form = this.fb.group({
      nome: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      email: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      senha: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      cargo: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      telefone: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      nivelAcesso: "Solicitante",
      statusUsuario: 0,
      instituicao: 1
    });
  }

  irParaLogin() {
    this.router.navigate(['/login']);
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
      this.router.navigate(['/login']);
    }
  }
  onCancel() {
    this.submitted = false;
    this.form.reset();
    // console.log("Cancel")
  }

}
