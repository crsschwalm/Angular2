import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import {
	EventListResolver,
	CreateEventComponent,
	EventDetailsComponent,
	EventsListComponent,
	CreateSessionComponent,
	EventResolver
} from './events/index';


/*
*
*Routes in Angular 2 are enabled using the Routes module from Angular
*Routes reference spcific components to be rendered based on the path
*Route guards allow controlling access on multiple different levels
*REFERENCE: https://angular.io/docs/ts/latest/guide/router.html
* 
 */
export const appRoutes:Routes = [
	{ path: 'events/new', component: CreateEventComponent,
	  canDeactivate: [ 'canDeactivateCreateEvent' ] },
	{ path: 'events', component: EventsListComponent, 
	  resolve: {events: EventListResolver} 
	},
	{ path: 'events/:id', 
		component: EventDetailsComponent,
		resolve: { event: EventResolver }},
	{ path: 'events/session/new', component: CreateSessionComponent },
	//BEST PRACTICE to provice an error page to direct user if the site exists or does not have correct credentials
	{ path: '404', component: Error404Component },
	//Auto redirect to list of events if navigating to 'root' of site
	{ path: '', redirectTo: '/events', pathMatch: 'full'},
	{ path: 'user', loadChildren:'app/user/user.module#UserModule'}
	
]

