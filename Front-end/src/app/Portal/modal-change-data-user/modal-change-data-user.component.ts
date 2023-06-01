import { ModalChangeDataUserService } from './modal-change-data-user.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-change-data-user',
  templateUrl: './modal-change-data-user.component.html',
  styleUrls: ['./modal-change-data-user.component.scss']
})
export class ModalChangeDataUserComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  list: any[] = [];

  constructor(
    private router: Router, 
    private fb: FormBuilder,
    private service: ModalChangeDataUserService,
    public bsModalRef: BsModalRef
  ) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      senha: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      cargo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      telefone: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      statusUsuario: [''],
      nivelAcesso: [''],
      id_instituicao: ['']
    });
  }

  updateUser(emails: string) {
    this.submitted = true;

    const user = {
      nome: this.form.value.nome,
      email: this.form.value.email,
      senha: this.form.value.senha,
      cargo: this.form.value.cargo,
      telefone: this.form.value.telefone,
      nivelAcesso: this.form.value.nivelAcesso,
      statusUsuario: this.form.value.statusUsuario,
      instituicao: this.form.value.id_instituicao
    }

    console.log(user);

    if (this.form.valid) {
      console.log('Submit');
      this.service.updateUser(emails, user).subscribe(
        success => console.log('Sucesso'),
        error => console.log('Error'),
        () => console.log('Request Completo')
      );
      this.router.navigate(['/users']); 
    }
  }

  ngOnInit(): void {
    if (this.list && this.list.length > 0) {
      this.form.patchValue({
        nome: this.list[0],
        email: this.list[1],
        senha: this.list[2],
        cargo: this.list[3],
        telefone: this.list[4],
        statusUsuario: this.list[6],
        nivelAcesso: this.list[5],
        id_instituicao: this.list[8]
      });
    }
  }
}
