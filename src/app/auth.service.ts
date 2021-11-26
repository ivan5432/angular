import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  logIn(name:string, password:string){
    if(name=="admin" && password=="1234"){
      // this.isLoggedIn=true;
      localStorage.setItem('logged', "true");
      console.log("Logged");
      this.router.navigateByUrl("/profile");
      return true;
    }
      return false;
  }
}
