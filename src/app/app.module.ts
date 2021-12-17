import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RecordVideoComponent } from './record-video/record-video.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from './_services/user.service';
import { ProfileComponent } from './profile/profile.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AlertifyService } from './_services/alertify.service';
import { ResetComponent } from './reset/reset.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {RecordingsComponent } from './recordings/recordings.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FileSaverModule } from 'ngx-filesaver';
import { HttpClientModule } from '@angular/common/http';
import { SharingComponent } from './sharing/sharing.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { VideoPageComponent } from './video-page/video-page.component';



@NgModule({

  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    RecordVideoComponent,
    DashboardComponent,
    ProfileComponent,
    SidenavComponent,
    ResetComponent,
    RecordingsComponent,
    SharingComponent,
    VideoPageComponent
    ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    FileSaverModule,
    ClipboardModule
  ],
  providers: [AngularFirestore,UserService, AlertifyService ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],


})
export class AppModule { }
