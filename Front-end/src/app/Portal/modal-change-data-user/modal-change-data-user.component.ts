import { ModalChangeDataUserService } from './modal-change-data-user.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UpdateUsers } from './updateUser';
import { every } from 'rxjs';

@Component({
  selector: 'app-modal-change-data-user',
  templateUrl: './modal-change-data-user.component.html',
  styleUrls: ['./modal-change-data-user.component.scss']
})
  
export class ModalChangeDataUserComponent implements OnInit {

  @Input() user: any
  table:UpdateUsers[] = [];
  list: any[] = [];
  
  constructor(
    private modalChangeDataUserService: ModalChangeDataUserService,
    public bsModalRef: BsModalRef
  ) {}
  
  ngOnInit() {
    this.list.push('PROFIT!!!');
    this.modalChangeDataUserService.getUser('joao.silva@example.com').subscribe((event)=>{
      this.table = event.result as UpdateUsers[];
      console.log(this.table);
    })
  }
}


