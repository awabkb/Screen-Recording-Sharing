import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router,
    private userService:UserService
    ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  createUser() {
    const { email, password, fullName } = this.registerForm.value;
    this.auth.createUserWithEmailAndPassword(email, password).then((res)=>{
      
      res.user?.updateProfile({displayName: fullName}).catch(err=>console.log(err));

      this.router.navigate(['']);

    });
}
}