import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-accept-deny-user',
  templateUrl: './modal-accept-deny-user.component.html',
  styleUrls: ['./modal-accept-deny-user.component.scss']
})
export class ModalAcceptDenyUserComponent {
  title?: string;
  closeBtnName?: string;
  list: any[] = [];
 
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
    this.list.push('PROFIT!!!');
  }
}
