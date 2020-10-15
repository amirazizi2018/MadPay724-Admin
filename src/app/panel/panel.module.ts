<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { PanelComponent } from './panel.component';
import { BrowserModule } from '@angular/platform-browser';
import { PanelRoutes } from './routes/panel.routing';

@NgModule({
  imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule.forRoot(PanelRoutes)
	],
  declarations: [PanelComponent]  
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PanelComponent]
>>>>>>> bb056437f83bb00e02667bac96b5564e875108f9
})
export class PanelModule { }
