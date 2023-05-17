import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalChangeDataUserComponent } from '../modal-change-data-user/modal-change-data-user.component';
import { LoginComponent } from '../login/login.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [ModalController]
})
export class UsersComponent {


  // modalRef!: BsModalRef;

  // constructor(private modalService: BsModalService) {}

  // abrirModal() {
  //   this.modalRef = this.modalService.show(ModalChangeDataUserComponent);
  // }

  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService) {}

  abrirModal() {
    this.modalRef = this.modalService.show(ModalChangeDataUserComponent);
  }

  fecharModal() {
    this.modalRef.hide();
  }


  
 










}
