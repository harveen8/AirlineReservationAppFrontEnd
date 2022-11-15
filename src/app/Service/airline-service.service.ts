import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Airline } from 'src/model/Airline';

@Injectable({
  providedIn: 'root'
})
export class AirlineServiceService {

  constructor(public http: HttpClient) { }
  server: string = "http://localhost:8052/airline"
  getAirlines(): Observable<Array<Airline>>{
    return this.http.get<Array<Airline>>(this.server);
  }
  getAirlineById(id : number): Observable<Airline>{
    return this.http.get<Airline>(this.server+"/"+id);
  }
}
