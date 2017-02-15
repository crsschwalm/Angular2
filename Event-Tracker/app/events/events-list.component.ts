import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';

@Component({
	moduleId: module.id,
	template: `
	<div>
		<h1>Upcoming Events</h1>
		<hr/>
		<div class="row">
			<div class="col-sm-5" *ngFor='let event of events'>
				<event-thumbnail (click)="handleThumbnailClick(event.name)" [event]='event'></event-thumbnail>
			</div>
		</div>
	</div>
	`
})

export class EventsListComponent implements OnInit{
	events:IEvent[];
	constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute){
		
	}

	ngOnInit() {
		this.events = this.route.snapshot.data['events'];
	}

	handleThumbnailClick(eventName){
		this.toastr.success(eventName);
	}
}