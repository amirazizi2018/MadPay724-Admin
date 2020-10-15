import { RegisterComponent } from './../register/register.component';
import { LoginComponent } from './../login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './../auth.component';

export const AuthRoutes: Routes = [
	{
		path: "auth", component: AuthComponent, children: [
			{ path: "", component: LoginComponent },
			{ path: "login", component: LoginComponent },
			{ path: "register", component: RegisterComponent }
		]
	},
];

