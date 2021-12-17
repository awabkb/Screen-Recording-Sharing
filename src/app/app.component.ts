import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'VideoSharing';
  constructor(private auth: AngularFireAuth) {}
  ngOnInit(): void {
    
  }
}
