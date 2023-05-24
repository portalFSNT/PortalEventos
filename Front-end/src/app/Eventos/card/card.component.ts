import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss', '../styles.scss']
})
export class CardComponent implements OnInit {

  agendamentosModal = [
    {
      "status": "Em andamento",
      "title": "FETECAgro 2022 2sementre",
      "data": "16/11/2022",
      "horario_inicio": "8h00",
      "horario_fim": "22h00",
      "endereco": "FATEC Pompéia"
    },
    {
      "status": "Em andamento",
      "title": "FETECAgro 2022 2sementre",
      "data": "16/11/2022",
      "horario_inicio": "8h00",
      "horario_fim": "22h00",
      "endereco": "FATEC Pompéia"
    },
    {
      "status": "Em andamento",
      "title": "FETECAgro 2022 2sementre",
      "data": "16/11/2022",
      "horario_inicio": "8h00",
      "horario_fim": "22h00",
      "endereco": "FATEC Pompéia"
    },{
      "status": "Em andamento",
      "title": "FETECAgro 2022 2sementre",
      "data": "16/11/2022",
      "horario_inicio": "8h00",
      "horario_fim": "22h00",
      "endereco": "FATEC Pompéia"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
