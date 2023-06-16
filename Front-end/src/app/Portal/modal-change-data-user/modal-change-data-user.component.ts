import { Instituicoes } from './../../Eventos/cad-eventos/instituicao';
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
  instituicoes: Instituicoes[] = [];

  constructor(
    private router: Router, 
    private fb: FormBuilder,
    private service: ModalChangeDataUserService,
    public bsModalRef: BsModalRef
  ) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
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
      window.location.reload();
    }
  }

  ngOnInit(): void {
    if (this.list && this.list.length > 0) {
      this.form.patchValue({
        nome: this.list[0],
        email: this.list[1],
        cargo: this.list[2],
        telefone: this.list[3],
        statusUsuario: this.list[5],
        nivelAcesso: this.list[4],
        id_instituicao: this.list[7]
      });
    }
    this.service.listarInstituicoes().subscribe(
      (results) => {
        this.instituicoes = results.results;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
