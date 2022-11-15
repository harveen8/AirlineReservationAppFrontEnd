import { getLocaleDateFormat, getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/model/Airline';
import { AirlineServiceService } from '../Service/airline-service.service';
import { ReservationServiceService } from '../Service/reservation-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public rservice: ReservationServiceService, 
    
   public aservice: AirlineServiceService) { }


   airlines: Array<Airline> =[];
   locations: Array<string> = ["Los Angeles","New York", "Houston", "San Fransisco", 
  "Miami", "Dallas", "New Jersey", "Chicago", "Kansas City", "New Orleans", "Las Vegas",
   "Reno"]
   departure: Date= new Date();
   arrival: Date =new Date();
   arrivalCity: string="";
   departureCity: string="";
   price: number=0;

  ngOnInit(): void {
    this.aservice.getAirlines().subscribe(data=>{console.log(data); this.airlines=data;})
  }

  addReservation(){
    let airlineId = Number((<HTMLSelectElement>document.getElementById("airlines")).value);
    this.arrivalCity=(<HTMLSelectElement>document.getElementById("arrivingCity")).value;
    this.departureCity=(<HTMLSelectElement>document.getElementById("departureCity")).value;
    this.rservice.addReservation(airlineId,this.departureCity,this.arrivalCity, this.departure,this.arrival,this.price);
  }
  priceChange(){
    this.price=this.getRndInteger(49,1345);
  }
   getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }





}
