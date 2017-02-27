import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './shared/event.service';

//In routes, we give a handler resolve: {prop: val} ... This tells the component to wait until the resolve returns
//we pass the resolve an object with a property that is the return of the method below

@Injectable()
export class EventResolver implements Resolve<any>{
	constructor(private eventService:EventService){}

	resolve(route: ActivatedRouteSnapshot){
		return this.eventService.getEvent(route.params['id']);
	}
}