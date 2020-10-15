<<<<<<< HEAD
import { LoginRoutes } from './routes/login.routing';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule.forRoot(LoginRoutes)
	],
	declarations: [LoginComponent]	
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [LoginComponent]
>>>>>>> bb056437f83bb00e02667bac96b5564e875108f9
})
export class LoginModule { }
