import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LogINComponent } from './pages/log-in/log-in.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SelectservesComponent } from './pages/selectserves/selectserves.component';
import { SelectServesDayComponent } from './pages/select-serves-day/select-serves-day.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LogINComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent,
  },
  {
    path: 'selectserve',
    component: SelectservesComponent
  },
  {
    path: 'selectserveday',
    component: SelectServesDayComponent
  }
  ,
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
