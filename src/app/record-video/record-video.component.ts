import { TypeofExpr } from '@angular/compiler';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {
  AngularFireStorage,
  AngularFireStorageReference,
} from '@angular/fire/storage';
import { ThemePalette } from '@angular/material/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Observable } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';



@Component({
  selector: 'app-record-video',
  templateUrl: './record-video.component.html',
  styleUrls: ['./record-video.component.css'],
})
export class RecordVideoComponent implements OnInit  {
 
  get videoElement(): HTMLVideoElement {
    return this.videoElementRef.nativeElement;
  }
  recorded=false;
  clicked = false;
  save = false;
  private recordedChunks: any[] = [];
  downloadURL: Observable<string>;
  percentage = 0;
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'determinate';
  videoName: string;
  constructor(
    private userService: UserService,
    private afStorage: AngularFireStorage,
    private alertify: AlertifyService,
    public dialog: MatDialog,
    private db:AngularFireDatabase
  ) {}
  

  @ViewChild('video') videoElementRef: ElementRef;
  // tslint:disable-next-line: typedef
  ngOnInit() {}
  start(): void {
    if (this.videoElement.src) {
      this.alertify.confirm(
        'Recored Again',
        'Unsaved recordings will be deleted',
        () => {
          this.startRecording();
        }
      );
    } else {
      this.startRecording();
    }
  }
  async stop() {
    console.log('stop called');
    this.clicked = false;
    this.videoElement.muted = false;
    if (this.videoElement.srcObject) {
      // @ts-ignore
      this.videoElement.srcObject.getTracks().forEach((track) => {
        track.stop();
      });
    }
    this.videoElement.srcObject = null;
    await this.delay(300);

    this.save = true;
    this.recorded =true;
    const superBuffer = new Blob(this.recordedChunks);
    this.videoElement.src = window.URL.createObjectURL(superBuffer);
  }

  // tslint:disable-next-line: typedef
  async startRecording() {
    let audioTrack: MediaStreamTrack;
    let videoTrack: MediaStreamTrack;
    let stream: MediaStream;

    // @ts-ignore
    navigator.mediaDevices.getDisplayMedia({
        video: true,
      })
      .then((displayStream: any) => {
        displayStream.oninactive = async () => {
          await document.getElementById('stop')?.click();
          return;
        };
        [videoTrack] = displayStream.getVideoTracks();
        navigator.mediaDevices
          .getUserMedia({
            audio: true,
          })
          .then((audioStream) => {
            [audioTrack] = audioStream.getAudioTracks();
            stream = new MediaStream([videoTrack, audioTrack]);

            this.videoElement.srcObject = stream;
            this.videoElement.muted = true;
            const options = {
              videoBitsPerSecond : 800000,
              mimeType: 'video/webm; codecs=vp9;' };

            // @ts-ignore
            const recorder = new MediaRecorder(stream, options);
            recorder.ondataavailable = this.handleDataAvailable.bind(this);
            this.delay(50).then(() => {
              recorder.start();
              this.waitTen().then(()=>{
                document.getElementById('stop')?.click()
                this.alertify.warning('Max video lenght 10 min reached');
                });
              this.clicked = true;
              recorder.onstop = this.stop.bind(this);
            });
          });
      });
  }

  // @ts-ignore
  // tslint:disable-next-line: typedef
  handleDataAvailable(event) {
    if (event.data.size > 0) {
      console.log(this.recordedChunks);
      this.recordedChunks.push(event.data);
    }
  }
  upload(): void {

    const metadata = {
      contentType: 'video/webm',
    };
    const superBuffer = new Blob(this.recordedChunks);

    const task = this.afStorage
                      .ref(this.userService.user.uid)
                      .child(this.videoName)
                      .put(superBuffer, metadata);
    this.videoName = '';
    task.snapshotChanges().subscribe(
      (s: any) => {
        console.log(s);
        this.percentage = (s.bytesTransferred / s.totalBytes) * 100;
        
      },
      (err: any) => {
        this.alertify.error('Uploading Failed');
      },
      (res:any) => {
        this.alertify.success('Video Uploaded Successfuly');
        
      }
    );
  }
  delay(ms: number): Promise<any> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  waitTen(){
    return new Promise((resolve)=> setTimeout(resolve,600000));
  }
  
}
