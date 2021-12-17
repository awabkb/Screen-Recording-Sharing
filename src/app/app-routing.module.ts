import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';
import { RegisterComponent } from './register/register.component';
import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecordVideoComponent } from './record-video/record-video.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetComponent } from './reset/reset.component';
import { RecordingsComponent } from './recordings/recordings.component';
import { VideoPageComponent } from './video-page/video-page.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToDashboard = redirectLoggedInTo(['']);
const redirectToDashboardWithLogger = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) =>
  pipe(
    tap(() => console.info('it will be redirected')),
    redirectToDashboard
  );
const routes: Routes = [
  {
    path: '',
    component: RecordVideoComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'record',
    component: RecordVideoComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'profile',
    component: ProfileComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'recordings',
    component: RecordingsComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectToDashboardWithLogger),
  },
  { path: 'reset', component: ResetComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'video/:videoId',component:VideoPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
