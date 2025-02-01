import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm : FormGroup;
  constructor(){
    this.signupForm= new FormGroup({
      schoolName: new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.email,Validators.required]),
      phoneNumber:new FormControl('',[Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]),
      password:new FormControl('',[Validators.required]),      
    })
  }



}
