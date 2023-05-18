import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-change-data-user',
  templateUrl: './modal-change-data-user.component.html',
  styleUrls: ['./modal-change-data-user.component.scss']
})
// export class ModalChangeDataUserComponent {

//   // constructor() {}

//   // ngOnInit() {}
//   constructor(public modalRef: BsModalRef) {}

//   fecharModal() {
//     this.modalRef.hide();
//   }

  
// }

// @Component({
//   // eslint-disable-next-line @angular-eslint/component-selector
//   selector: 'modal-content',
//   template: `
//     <div class="modal-header">
//       <h4 class="modal-title pull-left">{{title}}</h4>
//       <button type="button" class="btn-close close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
//         <span aria-hidden="true" class="visually-hidden">&times;</span>
//       </button>
//     </div>
//     <div class="modal-body">
//       <ul *ngIf="list.length">
//         <li *ngFor="let item of list">{{item}}</li>
//       </ul>
//     </div>
//     <div class="modal-footer">
//       <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">{{closeBtnName}}</button>
//     </div>
//   `
// })
 
export class ModalChangeDataUserComponent implements OnInit {
  title?: string;
  closeBtnName?: string;
  list: any[] = [];
 
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
    this.list.push('PROFIT!!!');
  }
}
