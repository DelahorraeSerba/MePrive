import { Component } from '@angular/core';

export interface Tile{
  link: string;
}

@Component({
  selector: 'app-selectserves',
  templateUrl: './selectserves.component.html',
  styleUrls: ['./selectserves.component.scss']
})
export class SelectservesComponent {
  daysOfWeek: string[] = [
    'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'
  ];
}
