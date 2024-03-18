import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.services';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})
export class DaysComponent implements OnInit{
  daysOfWeek: string[] = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
  ];
  restaurantData: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRestaurantData().subscribe(data => {
      console.log(data); // Verifica si los datos se están obteniendo correctamente
      this.restaurantData = data;
    });
  }
}