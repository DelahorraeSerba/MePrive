import { Component, OnInit, VERSION, ViewChild } from '@angular/core';

export interface Tile {
  image: string; // Background image of the grid-layout element
  cols: number;
  rows: number;
  text: string;
  size: string; // Used to instruct the image to occupy all the space.
  link?: string;
}

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.scss']
})
export class DemoGridComponent implements OnInit {
  mybreakpoint: number = 0;
  constructor() { }
  ngOnInit() {
  this.mybreakpoint = (window.innerWidth <= 600) ? 2 : 4;
  }
  handleSize(event: Event) {
    if (event.target instanceof Window) { // Verifica si event.target es una instancia de Window
      const windowWidth = event.target.innerWidth;
      this.mybreakpoint = (windowWidth <= 600) ? 2 : 4;
    }
  }
  tiles: Tile[] = [
    { text: '', cols: 2, rows: 2, image: 'url(../../../assets/Images/one.webp)', size: "cover" },
    { text: '', cols: 1, rows: 2, image: 'url(../../../assets/Images/two.webp)', size: "cover" },
    { text: '', cols: 1, rows: 1, image: 'url(../../../assets/Images/three.webp)', size: "cover" },
    { text: '', cols: 1, rows: 1, image: 'url(../../../assets/Images/four.webp)', size: "cover", link: "/login"},
  ];
  }