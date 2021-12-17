import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;
  constructor(private auth:AngularFireAuth, private db: AngularFireDatabase) {
    this.auth.user.subscribe(u=>this.user=u);
    
   }

  // updateUserFields(){
  //   if(this.user)
  //   console.log(this.user.uid);
  //   const dbRef =this.db.database.ref(`users/${this.user.uid}`);
  //   dbRef.push()
  // }

  
}
