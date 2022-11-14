import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from 'src/model/Users';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  server: string= "http://localhost:8052/user"
  constructor(private http: HttpClient) { 

  }

  checkUser(u: string, p: string): Observable<number>{
    return this.http.post<number>(this.server+"/check", {email: u, password: p} )
  }

  getUserById( id: number): Observable<Users>{
    return this.http.get<Users>(this.server+"/"+id);
  }

  addUser(name: string, u: string, p: string): Observable<boolean>{
    return this.http.post<boolean>(this.server, {name: name, email: u, password: p});
  }




}
