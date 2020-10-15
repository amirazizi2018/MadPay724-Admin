import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PanelModule } from './panel/panel.module';
import { AdminRoutes } from './routers/admin.routing';


@NgModule({
	declarations: [
		AppComponent		
	],
	imports: [
		BrowserModule,
		AppRoutingModule,		
		AuthModule,
		PanelModule,
		RouterModule.forRoot(AdminRoutes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
