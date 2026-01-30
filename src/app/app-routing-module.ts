import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { ReservationForm } from './reservation-form/reservation-form';
import { ReservationList } from './reservation-list/reservation-list';

const routes: Routes = [
  {path: "", component: Home},
  {path: "list", component: ReservationList},
  {path: "new", component: ReservationForm},
  {path: "edit/:id", component: ReservationForm},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
