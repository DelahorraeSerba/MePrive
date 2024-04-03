import {Component} from '@angular/core';
export interface Tile {
  cols: number;
  rows: number;
  text: string;
  items?: string[];
  imageUrl?: string;
  mapUrl?: string;
  size: string;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  tiles: Tile[] = [
    {text: 'Contacto', cols: 1, rows: 2, items: ['+34 983 210 012', 'info@meprive.es'], size: "cover"},
    {text: 'Horarios', cols: 1, rows: 2, items: ['Horario habitual – consulta cambios en días festivos y vísperas', '· De Lunes a Viernes de 9:00 a 18:00', '· Sábados de 9:00 a 16:00'], size: "cover"},
    {text: 'Ubicación', cols: 1, rows: 2, imageUrl: '../../../assets/Images/google maps.png', mapUrl: 'https://maps.app.goo.gl/ngZEbESDw4o3FhH68', size: "cover"},
  ];
}
