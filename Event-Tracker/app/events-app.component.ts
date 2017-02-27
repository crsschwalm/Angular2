import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';
/*
*
* Parent component for all others. Referenced in app/index.html
* 
 */
@Component({
	selector: 'events-app',
	template: `
	<nav-bar></nav-bar>
	<router-outlet></router-outlet>
	`
	//This router-outlet component is sending us to the router we declared in the app.module. this refers us to the routes.js file
	//for each url path we visit, a different component is going to be presented. (/events, /events/new...)
})

export class EventsAppComponent {
	constructor(private auth: AuthService){}
	ngOnInit(){
		//this could be subscribe to here, but for this example, we self-subscribe in the service
		this.auth.checkAuthenticationStatus();
	}
}