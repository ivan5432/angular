import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { 
    this.loginForm= this.formBuilder.group({
      name:"",
      password: ""
    });
  }

  ngOnInit(): void {
  }
  onSubmit(userData:any):void{
    this.loginForm.reset();
    let res=this.authService.logIn(userData.name, userData.password);
    if (res!=true){
      window.alert("Ім'я користувача або пароль введені не вірно")
    }
    console.warn("Submitted!")
  }

}
