import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';


@Injectable()
export class EventRouteService implements CanActivate {
	constructor(private eventService:EventService, private router:Router){

	}

	canActivate(route:ActivatedRouteSnapshot){
		const eventExists = !!this.eventService.getEvent(+route.params['id']);

//If route Doesnt Exist, then reroute to 404. else route continue
		if (!eventExists)
			this.router.navigate(['/404']);
		return eventExists;
	}

}
