import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutes } from './routes/auth.routing';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(AuthRoutes)
    ],
    declarations: [
        AuthComponent,
        LoginComponent,
        RegisterComponent]
})
export class AuthModule { }
