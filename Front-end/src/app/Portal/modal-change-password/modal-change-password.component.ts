import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalChangePasswordService } from './modal-change-password.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-modal-change-password',
  templateUrl: './modal-change-password.component.html',
  styleUrls: ['./modal-change-password.component.scss']
})
export class ModalChangePasswordComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  list: any[] = [];

  constructor(
    private router: Router, 
    private fb: FormBuilder,
    private service: ModalChangePasswordService,
    public bsModalRef: BsModalRef, 
    private modalService: BsModalService
  ) {
    this.form = this.fb.group({
      senha: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
    });
  }

  updateSenha(emails: string) {
    this.submitted = true;

    const senha = this.form.value.senha;

    console.log("SENHA: "+senha);
    console.log("EMAIL: "+emails);
    console.log("LISTA: "+this.list[1])

    if (this.form.valid) {
      console.log('Submit');
      this.service.updateSenha(emails, senha).subscribe(
        success => { console.log('Sucesso') },
        error => {console.log('Error', error) },
        () => console.log('Request Completo')
      );
      // this.router.navigate(['/users']); 
      // window.location.reload()
    }
  }

  ngOnInit(): void {
    if (this.list && this.list.length > 0) {
      this.form.patchValue({
        email: this.list[1],
      });

      console.log("LISTA: "+this.list[1])

    }
  }

}
