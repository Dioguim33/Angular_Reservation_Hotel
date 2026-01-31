import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  standalone: false,
  templateUrl: './reservation-list.html',
  styleUrl: './reservation-list.css',
})

export class ReservationList implements OnInit {
  
  reservations: Reservation[] = [];
  
  constructor(
    private reservationService: ReservationService,
    private cd: ChangeDetectorRef
  ){};

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe((reservations) =>{
      this.reservations = reservations
      this.cd.detectChanges()
    })
  }
  
  deleteReservation(id: string){
    this.reservationService.deleteReservation(id).subscribe(() => {
      console.log("Delete request got processed.")
    });
  }
}
