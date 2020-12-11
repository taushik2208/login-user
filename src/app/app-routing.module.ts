import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'main', component: MainComponent , children: [
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent},
  ] },
  { path: 'landing', component: LandingComponent},
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
