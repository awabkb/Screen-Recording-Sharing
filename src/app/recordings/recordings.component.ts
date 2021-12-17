import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialog } from '@angular/material/dialog';
import { SharingComponent } from '../sharing/sharing.component';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';
interface Video {
  Name: string;
  Url: string;
  FullPath: string;
}


@Component({
  selector: 'app-recordings',
  templateUrl: './recordings.component.html',
  styleUrls: ['./recordings.component.scss'],
})
export class RecordingsComponent implements OnInit, AfterViewInit {
  videos: Video[] = [];
  constructor(
    private afStorage: AngularFireStorage,
    private alertify: AlertifyService,
    private userService: UserService,
    private auth: AngularFireAuth,
    public dialog: MatDialog
  ) {}
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.auth.user.subscribe(
      (u) => {
        if (u) {
          this.afStorage
            .ref(u.uid)
            .listAll()
            .subscribe((res) => {
              res.items.forEach((i) => {
                i.getDownloadURL().then((url) => {
                  const vid = {
                    Name: i.name,
                    Url: url,
                    FullPath: i.fullPath,
                  };
                  this.videos.push(vid);
                });
              });
              console.log(this.videos);
            });
        }
      },
      (err) => {},
      () => {
        console.log(this.videos);
      }
    );
  }

  openVideo() {}

  removeVideo(video: Video) {
    this.alertify.confirm(
      'Delete Video',
      `Are you sure you want to delete this video: "${video.Name}"`,
      () => {
        this.afStorage
          .ref(video.FullPath)
          .delete()
          .subscribe(
            (res) => {
              console.log(res);
            },
            (err) => {
              this.alertify.error('Failed to Delete Video');
            },
            () => {
              this.alertify.message('Video Deleted');
              this.videos.splice(this.videos.indexOf(video), 1);
            }
          );
      }
    );
  }
  shareVideo(video: Video){
    const dialogRef = this.dialog.open(SharingComponent,{
      width: '550px',
      data:{
        videoURL:video.Url
      }
    });
  }
}
