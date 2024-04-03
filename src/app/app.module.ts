import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoGridComponent} from './components/grid-layout/grid-layout.component';
import { DaysComponent } from './components/days/days.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LogINComponent } from './pages/log-in/log-in.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SelectservesComponent } from './pages/selectserves/selectserves.component';
import { SelectServesDayComponent } from './pages/select-serves-day/select-serves-day.component';
import { DragservedaysComponent } from './components/dragservedays/dragservedays.component';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DaysComponent,
    FooterComponent,
    HomePageComponent,
    NotFoundComponent,
    LogINComponent,
    AdminPageComponent,
    SelectservesComponent,
    SelectServesDayComponent,
    DragservedaysComponent,
    DemoGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    CdkDropList,
    NgFor,
    CdkDrag
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
