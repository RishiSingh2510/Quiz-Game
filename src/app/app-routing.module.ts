import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


const routes: Routes = [
  {path:"", component: WelcomePageComponent},
  {path:"login", component: LoginPageComponent},
  {path:"Q", component: QuestionPageComponent},
  {path:"**", component: WelcomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
