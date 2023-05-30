import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalAcceptDenyUserComponent } from '../modal-accept-deny-user/modal-accept-deny-user.component';
import { UsersPending } from './users-pending';
import { UsersPendingService } from './users-pending.service';

@Component({
  selector: 'app-users-pending',
  templateUrl: './users-pending.component.html',
  styleUrls: ['./users-pending.component.scss']
})
export class UsersPendingComponent implements OnInit {
  @Input() user: any;

  table: UsersPending[] = [];
  filteredTable: UsersPending[] = [];

  constructor(private service: UsersPendingService, private modalService: BsModalService) { }

  ngOnInit() {
    this.service.listUsersPending().subscribe((event) => {
      this.table = event.result as UsersPending[];
      this.filterTable();
      console.log(this.filteredTable);
    });
  }

  filterTable() {
    this.filteredTable = this.table.filter((user) => user.status_usuario === 0);
  }

  bsModalRef?: BsModalRef;


  
  // openModalWithComponent(id) {
  //   console.log(id);
  //   // Aqui você pode usar o ID do usuário para obter as informações completas do usuário antes de abrir o modal
  //   // Por exemplo, você pode chamar um serviço para obter os detalhes do usuário com base no ID

  //   // Exemplo fictício para obter as informações do usuário com base no ID

  //     // this.bsModalRef = this.modalService.show(ModalAcceptDenyUserComponent);
  //     // this.bsModalRef.content.closeBtnName = 'Close';

  // }

}
