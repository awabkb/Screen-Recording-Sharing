import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
})
export class ResetComponent implements OnInit {
  passwordReset: FormGroup;

  constructor(
    private auth: AngularFireAuth,
    private fb: FormBuilder,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {
    this.passwordReset = this.fb.group({
      email: new FormControl('', Validators.email),
    });
  }
  resetPasswordByEmail(){
    const email= this.passwordReset.controls['email'].value;
    this.auth.sendPasswordResetEmail(email).then(s=>{
      console.log(s);
      this.alertify.message('Password reset email sent');
    }).catch(err=>this.alertify.error('Failed to send'));
  }
}