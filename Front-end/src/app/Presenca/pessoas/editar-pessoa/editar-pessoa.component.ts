import { EmpresaService } from './../../empresas/empresa.service';
import { PessoaService } from "./../pessoa.service";
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, Input, OnInit } from "@angular/core";
import { Pessoa } from "../pessoa";
import { Empresa } from "../nova-pessoa/empresa";

@Component({
  selector: "app-editar-pessoa",
  templateUrl: "./editar-pessoa.component.html",
  styleUrls: ["./editar-pessoa.component.scss"],
})
export class EditarPessoaComponent implements OnInit {
  form!: FormGroup;
  listaPessoa:Empresa[]=[];
  list: string[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private modalController: ModalController,
    private service: PessoaService,
    private empresaService:EmpresaService,
  ) {}

  ngOnInit(): void {
    this.empresaService.listar().subscribe((event)=>{
      this.listaPessoa=event.result as Empresa[];
    })
    this.form = this.fb.group({
      id: this.list[0],
      nome:[this.list[1], [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      email:[this.list[2],[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      cargo :[this.list[3],[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      telefone:[this.list[4],[Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      empresa:[this.list[5]]
    });
    console.log(this.list[0]);
  }

  // editar() {
  //   if (this.form.valid) {
  //     const editaPessoa = this.form.getRawValue() as Pessoa;
  //     this.service
  //       .edit(this.nome, editaPessoa)
  //       .subscribe(() => this.router.navigate(["/convidados"]));
  //     console.log(this.nome, editaPessoa);
  //   }
  // }

  updatePessoa(id:number) {
    if(this.form.valid){
      const reqBody = {
        nome: this.form.value.nome,
        email: this.form.value.email,
        cargo: this.form.value.cargo,
        telefone: this.form.value.telefone,
        empresa:  this.form.value.empresa,
      }

      console.log('Submit');
      this.service.updatePessoa(id, reqBody).subscribe(
        sucess => console.log('Sucesso'),
        error => console.log('Error'),
        () => console.log('Requisição completa.')
      )
    }
    window.location.reload();
  }

  salvar() {
    this.modalController.dismiss();
  }

  cancelar() {
    this.modalController.dismiss();
  }
}
