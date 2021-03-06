import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';
import { SessionListComponent } from './session-list.component';



@Component({
	moduleId: module.id,
	templateUrl: './event-details.component.html',
	styles: [`
		.container { padding-left: 20px; padding-right: 20px;}
		.event-image { height: 100px; }
		a { cursor: pointer; float: right;}
	`]
})	

export class EventDetailsComponent implements OnInit {
	event: IEvent;
	addMode: boolean;
	filterBy: string = 'all';
	sortBy: 'vote';
	

	constructor(private eventService:EventService, private route: ActivatedRoute){

	}
	ngOnInit() {
		this.route.data.forEach((data) => {
			this.event = data['event']
			this.addMode = false;
		})
		//this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
	}
	/**
	 * Flag to show create-session component
	 */
	addSession(){
		this.addMode = true;
	}

	/**
	 * Finds the max ID and sets new SessionId to 1+
	 * pushes new session to sessions array and toggles off add mode flag
	 */
	saveNewSession(session:ISession){
		//assign new ID
		const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
		session.id = nextId + 1;
		this.event.sessions.push(session);
		this.eventService.saveEvent(this.event).subscribe();
		this.addMode = false;
	}

	cancelAddSession(){
		this.addMode = false;
	}
}