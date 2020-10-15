import { Routes, RouterModule } from '@angular/router';

export const AdminRoutes: Routes = [
	{
		path: "", redirectTo: "/auth", pathMatch: "full"
	},
	{
		path: "auth", redirectTo: "/auth", pathMatch: "full"
	},
	{
		path: "panel", redirectTo: "/panel", pathMatch: "full"
	},
];