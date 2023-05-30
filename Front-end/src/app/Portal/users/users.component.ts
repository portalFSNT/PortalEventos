import { ModalController } from '@ionic/angular';
import { ModalChangeDataUserComponent } from '../modal-change-data-user/modal-change-data-user.component';
import { Component, Input, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { Users } from './users';
import { UsersService } from './users.service';
import { ModalChangeDataUserService } from '../modal-change-data-user/modal-change-data-user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [ModalController]
})
export class UsersComponent {
  
  @Input() user: any;

  table:Users[] = [];

  bsModalRef?: BsModalRef;
  constructor(
    private modalChangeDataUserService: ModalChangeDataUserService,
    private service: UsersService, 
    private modalService: BsModalService
  ) {}

  ngOnInit() {
      this.service.listUsers().subscribe((event) => {
        this.table = event.result as Users[]
        console.log(this.table);
      })
  }

 
  openModalWithComponent(user: any) {
    const nome = user.nome;
    const email = user.email;
    const telefone = user.telefone;
    const empresa = user.nome_instituicao;
    const cargo = user.cargo;

    const initialState: ModalOptions = {
      initialState: {
        list: [
          nome,
          telefone,
          empresa,
          cargo,
          email,
        ],
        title: 'Modal with component'
      }
    };
    this.bsModalRef = this.modalService.show(ModalChangeDataUserComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }   
}