import { Routes, RouterModule } from '@angular/router';

export const AdminRoutes: Routes = [
	{	path: "", redirectTo: "/auth/login", pathMatch: "full"	},
	{	path: "auth", redirectTo: "/auth/login", pathMatch: "full"	},
	{	path: "panel", redirectTo: "/panel", pathMatch: "full"	},
];