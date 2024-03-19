import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  items?: string[];
  imageUrl?: string;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  tiles: Tile[] = [
    {text: 'Contacto', cols: 1, rows: 2, items: ['+34 983 210 012', 'info@meprive.es']},
    {text: 'Horarios', cols: 1, rows: 2, items: ['Horario habitual – consulta cambios en días festivos y vísperas', '· De Lunes a Viernes de 9:00 a 18:00', '· Sábados de 9:00 a 16:00']},
    {text: 'Ubicación', cols: 1, rows: 2, imageUrl: '../../../assets/Images/google maps.png'},
  ];
}
