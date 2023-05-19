// import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalChangeDataUserComponent } from '../modal-change-data-user/modal-change-data-user.component';
import { LoginComponent } from '../login/login.component';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [ModalController]
})
export class UsersComponent {

  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModalWithComponent() {
    const initialState: ModalOptions = {
      initialState: {
        list: [
          'Open a modal with component',
          'Pass your data',
          'Do something else',
          '...'
        ],
        title: 'Modal with component'
      }
    };
    this.bsModalRef = this.modalService.show(ModalChangeDataUserComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  
}
 
/* This is a component which we pass in modal*/
 
