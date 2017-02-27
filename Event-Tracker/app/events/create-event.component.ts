import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/event.service';

@Component({
	//using this moduleId: module.id decorator allows for relative asset reference
	//when referencing template url, we dont have to source from the root of the app, rather from the folder we are currently in
	moduleId: module.id,
	templateUrl: 'create-event.component.html',
	styles: [`
		em { float: right; color: #E05C65; padding-left: 10px}
		.error input { background-color: #E3C3C5; }
		.error ::-webkit-input-placeholder: { color: #999; }
		.error ::-moz-placeholder { color: #999; }
		.error :-moz-placeholder { color: #999; }
		.error :ms-input-placeholder { color: #999; }
	`]
})

export class CreateEventComponent {
	isDirty:boolean = true;

	constructor(private router:Router, private eventService:EventService){}

	cancel() {
		this.router.navigate(['/events']);
	}

	saveEvent(formValues){
		//subscribe to the observable for the eventService's saveEvent function
		this.eventService.saveEvent(formValues).subscribe( event => {
			this.isDirty = false;
			this.router.navigate(['/events']);
		});
  	}
}
