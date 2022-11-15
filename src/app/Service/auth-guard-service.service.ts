import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { GlobalServiceService } from './global-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService {

  constructor(private router: Router, private gservice: GlobalServiceService) { }

 canActivate(route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): boolean {
   if (!this.gservice.loggedIn) {
     alert('You are not allowed to view this page until you log in');
     this.router.navigateByUrl('');
     return false;
   }
   return true;
 }
}
