import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule }   from '@angular/router';
import { LoginFormComponent } from './login/login-form.component';
import { RegisterFormComponent } from './register/register-form.component';
import { ForgotFormComponent } from './forgotpassword/forgot-form.component';
import { UserFormComponent } from './user/user-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ForgotFormComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full' 
      },
      {
        path: 'login',
        component: LoginFormComponent
      },
      {
        path: 'register',
        component: RegisterFormComponent
      },
      {
        path: 'forgot',
        component: ForgotFormComponent
      },
      {
        path: 'user',
        component: UserFormComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

