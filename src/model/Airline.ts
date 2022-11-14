import { Reservation } from "./Reservation";

export interface Airline {
    airlineId: number;
    airlineName: string;
    reservationList: Array<Reservation>;
}