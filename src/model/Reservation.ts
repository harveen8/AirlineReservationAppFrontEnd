import { Airline } from "./Airline";
import { Users } from "./Users";

export interface Reservation {
    reservationId : number;
    departureCity : string;
    arrivalCity : string;
    arrival: Date; 
    departure: Date;
    price: number;
    airline: Airline;
    users: Users;
}