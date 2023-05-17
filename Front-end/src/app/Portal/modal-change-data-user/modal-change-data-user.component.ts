import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-change-data-user',
  templateUrl: './modal-change-data-user.component.html',
  styleUrls: ['./modal-change-data-user.component.scss']
})
export class ModalChangeDataUserComponent {

  // constructor() {}

  // ngOnInit() {}
  constructor(public modalRef: BsModalRef) {}

  fecharModal() {
    this.modalRef.hide();
  }

  
}
