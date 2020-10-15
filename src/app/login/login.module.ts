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
})
export class LoginModule { }
