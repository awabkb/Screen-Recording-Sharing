import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  compName: string;
  loggedin = false;
  constructor(public route: Router, private auth: AngularFireAuth,private alertify:AlertifyService) {}

  ngOnInit(): void {
    this.auth.user.subscribe(
      user => {
        console.log(user);
        if(user) {
          this.loggedin = true;
        }
      });
    
  }
  logout() {
    this.auth
      .signOut()
      .then(() => {
        this.alertify.message('Logged out');
        this.route.navigate(['login']);
        this.loggedin=false;
      })
      .catch((err) => console.log('failed to logout'));
  }
}
