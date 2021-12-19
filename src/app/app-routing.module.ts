import { InicioComponent } from './inicio/inicio.component';
import { UploadComponent } from './upload/upload.component';
import { VideosComponent } from './videos/videos.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent},
  { path: 'login', component: LoginComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'upload', component: UploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
