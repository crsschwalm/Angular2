import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
	selector: 'events-app',
	template: `
	<nav-bar></nav-bar>
	<router-outlet></router-outlet>
	`
})

export class EventsAppComponent {
	constructor(private auth: AuthService){}

	ngOnInit(){
		//this could be subscribe to here, but for this example, we self-subscribe in the service
		this.auth.checkAuthenticationStatus();
	}
}