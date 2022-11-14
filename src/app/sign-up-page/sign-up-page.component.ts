import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalServiceService } from '../Service/global-service.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  name: string="";
  email: string="";
  password: string="";
  message: string="";

  constructor(public router: Router, public gservice: GlobalServiceService) { }

  ngOnInit(): void {
  }

  addUser(){
    this.gservice.addUser(this.name,this.email,this.password).subscribe(data=>
      {console.log(data);
        if(data){
          this.message="success"
        }else{
          this.message="already exists"
        }
      })
  }

  logIn(){
    this.router.navigateByUrl('');
  }
}
