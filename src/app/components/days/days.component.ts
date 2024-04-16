import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.services';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})
export class DaysComponent implements OnInit{
  daysOfWeek: string[] = [
    'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'
  ];
  restaurantData: any;

  getDishesForDay(dayIndex: number): any[] {
    const startIndex = dayIndex * 3;
    const endIndex = startIndex + 3;
    return this.restaurantData?.dishes.slice(startIndex, endIndex);
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRestaurantData().subscribe(data => {
      console.log(data); // Verifica si los datos se están obteniendo correctamente
      this.restaurantData = data;
    });
  }
}