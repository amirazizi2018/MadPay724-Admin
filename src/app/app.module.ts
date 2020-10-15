

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PanelModule } from './panel/panel.module';
import { LoginModule } from './login/login.module';
import { AdminRoutes } from './routers/admin.routing';


@NgModule({
	declarations: [
		AppComponent		
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		LoginModule,
		PanelModule,
		RouterModule.forRoot(AdminRoutes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
