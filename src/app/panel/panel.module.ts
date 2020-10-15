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
})
export class PanelModule { }
