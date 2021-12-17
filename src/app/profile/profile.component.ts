import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  user: any;
  constructor(private fb: FormBuilder, private auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.auth.user.subscribe(user => {
      if(user){
        console.log(user);
        this.user = user;
        this.profileForm.controls['fullName'].setValue(user?.displayName);
        this.profileForm.controls['email'].setValue(user?.email);

      }
    });
    this.profileForm = this.fb.group({
      fullName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

  }

  updateProfile(){
    const {email, password, fullName} = this.profileForm.value;
    this.auth.user.subscribe(user => {
      if(fullName)
      user?.updateProfile({displayName: fullName}).catch(err => console.log(err));
      if(email)
      user?.updateEmail(email).catch(err => console.log(err));
      if(password)
      user?.updatePassword(password).catch(err => console.log(err));
    });
  }
}
