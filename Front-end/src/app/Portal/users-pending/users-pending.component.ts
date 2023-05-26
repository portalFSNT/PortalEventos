import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalAcceptDenyUserComponent } from '../modal-accept-deny-user/modal-accept-deny-user.component';
import { UsersPending } from './users-pending';
import {UsersPendingService} from './users-pending.service';

@Component({
  selector: 'app-users-pending',
  templateUrl: './users-pending.component.html',
  styleUrls: ['./users-pending.component.scss']
})
export class UsersPendingComponent {
  @Input() user: any;

  table: UsersPending[] = [];
  filteredTable: UsersPending[] = [];

  constructor(private service: UsersPendingService, modalService: BsModalService) {}

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
}

