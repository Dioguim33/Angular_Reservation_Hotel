import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationForm } from '../reservation-form/reservation-form';
import { ReservationList } from '../reservation-list/reservation-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "../app-routing-module";
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home-module';

@NgModule({
  declarations: [
    ReservationForm,
    ReservationList,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    HomeModule
]
})
export class ReservationModule { }
