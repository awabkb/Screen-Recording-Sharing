import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {
  videoURL: string;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    // this.db.database.ref('videos/').child(key).get().then(res=>{
    //   this.videoURL =res.val();
    // });
  }

}
