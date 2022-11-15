
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/model/Reservation';
import { AirlineServiceService } from './airline-service.service';
import { GlobalServiceService } from './global-service.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {

  constructor(public http: HttpClient, public gservice: GlobalServiceService) {}

  server: string= "http://localhost:8052/reservation"

  addReservation(airlineId: number,departureCity: string, 
    arrivalCity :string, departure: Date, arrival : Date, price: number ): void{
      this.http.post<Reservation>(this.server+"/"+this.gservice.userId+"/"+airlineId, 
        {departureCity: departureCity, arrivalCity: arrivalCity, departure: departure, 
        arrival:arrival, price:price}).subscribe(data=> console.log(data));
  }

  allReservations() : Observable<Array<Reservation>>{
    return this.http.get<Array<Reservation>>(this.server);
  }



  



  
}
