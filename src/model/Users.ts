import { Reservation } from "./Reservation";

export interface Users {
    userId : number;
    name : string;
    email : string;
    password: string; //so password can have numbers / ?!@#
    reservationList: Array<Reservation>;


}