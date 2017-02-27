import { Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';

/*
*
*Routes in Angular 2 are enabled using the Routes module from Angular
*Routes reference spcific components to be rendered based on the path
*Route guards allow controlling access on multiple different levels
*REFERENCE: https://angular.io/docs/ts/latest/guide/router.html
* 
 */
export const userRoutes:Routes = [
	{ path: 'profile', component: ProfileComponent},
	{ path: 'login', component: LoginComponent },
	{ path: '', redirectTo: 'profile', pathMatch: 'full'}
];

