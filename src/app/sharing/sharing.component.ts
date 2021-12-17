import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  videoURL: string;
  videoTitle:string;
}
@Component({
  selector: 'app-sharing',
  templateUrl: './sharing.component.html',
  styleUrls: ['./sharing.component.scss']
})
export class SharingComponent implements OnInit {
  facebookURL: string;
  twitterURL: string;
  linkedinURL: string;
  whatsappURL: string;
  email:string;
  constructor(
    public dialogRef: MatDialogRef<SharingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    const encodedVideoURL = encodeURI(this.data.videoURL);
    const encodedVideoTitle =encodeURI(this.data.videoTitle);

    this.facebookURL = `https://www.facebook.com/sharer.php?u=${encodedVideoURL}`;
    this.twitterURL = `https://twitter.com/share?url=${encodedVideoURL}&text=${encodedVideoTitle}`;
    this.linkedinURL =  `https://www.linkedin.com/shareArticle?url=${encodedVideoURL}&title=${encodedVideoTitle}`;
    this.whatsappURL =     `https://wa.me/?text=${encodedVideoTitle} ${encodedVideoURL}`;
    this.email =`mailto:?subject=I wanted you to check this video&amp;&body=Check out this site ${this.data.videoURL}.`;

  }

}
