import { EmpresaService } from './../../empresas/empresa.service';
import { PessoaService } from "./../pessoa.service";
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Component, Input, OnInit } from "@angular/core";
import { Pessoa } from "../pessoa";
import { Empresa } from "../nova-pessoa/empresa";

@Component({
  selector: "app-editar-pessoa",
  templateUrl: "./editar-pessoa.component.html",
  styleUrls: ["./editar-pessoa.component.scss"],
})
export class EditarPessoaComponent implements OnInit {
  editarPessoaForm!: FormGroup;
  listaPessoa:Empresa[]=[];

  @Input() nome: any;

  @Input() cargo: any;

  @Input() empresa: any;

  @Input() email: any;

  @Input() telefone: any;
  output: any;
  constructor(
    private formBuilder: FormBuilder,

    private router: Router,
    private modalController: ModalController,
    private service: PessoaService,
    private empresaService:EmpresaService,
  ) {}

  ngOnInit(): void {
    this.empresaService.listar().subscribe((event)=>{
      this.listaPessoa=event.result as Empresa[];
    })
    this.editarPessoaForm = this.formBuilder.group({
      nome: this.nome,
      cargo: this.cargo,
      empresa: this.empresa,
      email: this.email,
      telefone: this.telefone,
    });
  }
  editar() {
    if (this.editarPessoaForm.valid) {
      const editaPessoa = this.editarPessoaForm.getRawValue() as Pessoa;
      this.service
        .edit(this.nome, editaPessoa)
        .subscribe(() => this.router.navigate(["/convidados"]));
      console.log(this.nome, editaPessoa);
    }
  }

  salvar() {
    this.modalController.dismiss();
  }

  cancelar() {
    this.modalController.dismiss();
  }
}
