import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

export interface Tile {
  image: string; // Background image of the grid-layout element
  cols: number;
  rows: number;
  text: string;
  size: string; // Used to instruct the image to occupy all the space.
}

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.scss']
})
export class GridLayoutComponent {
  tiles: Tile[] = [
    {text: '', cols: 2, rows: 2, image: 'url(../../../assets/Images/one.webp)', size: "cover"},
    {text: '', cols: 1, rows: 2, image: 'url(../../../assets/Images/two.webp)', size: "cover"},
    {text: '', cols: 1, rows: 1, image: 'url(../../../assets/Images/three.webp)', size: "cover"},
    {text: '', cols: 1, rows: 1, image: 'url(../../../assets/Images/four.webp)', size: "cover"},
  ];
}
