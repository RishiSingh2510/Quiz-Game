import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuizDataService } from './services/quiz-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    QuestionPageComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LoadingBarRouterModule,
    HttpClientModule
  ],
  providers: [QuizDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
