import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onLogin() {
    if(this.loginForm.invalid) return;
    const { email, password } = this.loginForm.value;
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.alertify.success('LoggedIn Successfully');
      this.router.navigate([''])})
      .catch(err=>this.alertify.error('Login Failed'));
  }

}
