<<<<<<< HEAD


=======
import { PanelModule } from './panel/panel.module';
import { LoginModule } from './login/login.module';
>>>>>>> bb056437f83bb00e02667bac96b5564e875108f9
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
<<<<<<< HEAD
		AppComponent		
=======
		AppComponent
>>>>>>> bb056437f83bb00e02667bac96b5564e875108f9
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		LoginModule,
<<<<<<< HEAD
		PanelModule,
		RouterModule.forRoot(AdminRoutes)
=======
		PanelModule
>>>>>>> bb056437f83bb00e02667bac96b5564e875108f9
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
