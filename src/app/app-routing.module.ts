import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"", component: MainComponent},
  {path:"login", component: LoginComponent},
  {path:"news", component: NewsComponent},
  {path:"profile", component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
