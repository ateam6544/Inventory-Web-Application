import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

  progress = 20;

  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
  });

  onSubmit() {
    if(this.loginForm.valid){
    }
  }
}
