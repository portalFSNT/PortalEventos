import { Component } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalAcceptDenyUserComponent } from '../modal-accept-deny-user/modal-accept-deny-user.component';

@Component({
  selector: 'app-users-pending',
  templateUrl: './users-pending.component.html',
  styleUrls: ['./users-pending.component.scss']
})
export class UsersPendingComponent {


  // Modal de aceitar ou negar solicitação
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
    this.bsModalRef = this.modalService.show(ModalAcceptDenyUserComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
