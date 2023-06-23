import { Component } from '@angular/core';

@Component({
  selector: 'app-header-solicitante',
  templateUrl: './header-solicitante.component.html',
  styleUrls: ['./header-solicitante.component.scss']
})
export class HeaderSolicitanteComponent {
  logout():any{
    this.tokenService.deleteToken();
    this.router.navigate(['/login']);
  }
}
