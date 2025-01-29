import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  singupForm : FormGroup;
  constructor(){
    this.singupForm= new FormGroup({
      userName: new FormControl('',[Validators.required]),
      
    })
  }



}
