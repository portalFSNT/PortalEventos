// import { Component } from '@angular/core';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalController } from '@ionic/angular';
import { ModalChangeDataUserComponent } from '../modal-change-data-user/modal-change-data-user.component';
import { LoginComponent } from '../login/login.component';
import { Component, Input, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { Users } from './users';
import { UsersService } from './users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [ModalController]
})
export class UsersComponent {
  
  @Input() user: any;

  table:Users[] = [];

  constructor(private service: UsersService, modalService: BsModalService) {}

  ngOnInit() {
      this.service.listUsers().subscribe((event) => {
        this.table = event.result as Users[]
        console.log(this.table);
      })
  }

  // bsModalRef?: BsModalRef;
  // // constructor(private modalService: BsModalService) {}
 
  // openModalWithComponent() {
  //   const initialState: ModalOptions = {
  //     initialState: {
  //       list: [
  //         'Open a modal with component',
  //         'Pass your data',
  //         'Do something else',
  //         '...'
  //       ],
  //       title: 'Modal with component'
  //     }
  //   };
  //   this.bsModalRef = this.modalService.show(ModalChangeDataUserComponent, initialState);
  //   this.bsModalRef.content.closeBtnName = 'Close';
  // }
  
}


 
