import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalServiceService } from '../Service/global-service.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {

  constructor(public gservice: GlobalServiceService, public router: Router) { }
  username: string="";
  password: string="";
message: string="";
  ngOnInit( ): void {
  }
  logIn(){
    this.gservice.checkUser(this.username,this.password).subscribe(data=>{console.log(data);
    if(data==-1){
    this.message= "not a user";
    }else{
      this.message="success!"
    }})
  }
  signUp(): void {
    this.router.navigateByUrl('signUp');
  }

}
