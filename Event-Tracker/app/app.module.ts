import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Custom Services
import { AuthService } from './user/auth.service';
import { 
	TOASTR_TOKEN,
	JQ_TOKEN,
	CollapsibleWellComponent,
	SimpleModalComponent,
	ModalTriggerDirective

} from './common/index';

//Components
import {
	EventsListComponent,
	EventThumbnailComponent,
	EventDetailsComponent,
	CreateEventComponent,
	EventService,
	EventRouteService,
	EventListResolver,
	CreateSessionComponent,
	SessionListComponent,
	DurationPipe,
	UpvoteComponent,
	VoterService,
	LocationValidatorDirective

} from './events/index';
//Custom Components
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

import { appRoutes } from './routes';

declare let toastr : Object;
declare let jQuery : Object;

@NgModule({
	imports: [ 
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot(appRoutes)
	],
	declarations: [ 
		EventsAppComponent, 
		EventsListComponent,
		EventThumbnailComponent,
		NavBarComponent,
		EventDetailsComponent,
		CreateEventComponent,
		Error404Component,
		CreateSessionComponent,
		SessionListComponent,
		CollapsibleWellComponent,
		DurationPipe,
		SimpleModalComponent,
		ModalTriggerDirective,
		UpvoteComponent,
		LocationValidatorDirective
	],
	providers: [ 
		EventService,
		{ 
			provide: JQ_TOKEN,
			useValue: jQuery
		},
		{ 
			provide: TOASTR_TOKEN,
			useValue: toastr
		},
		EventRouteService,
		EventListResolver,
		AuthService,
		VoterService,
		{ 
			provide: 'canDeactivateCreateEvent',
			useValue: checkDirtyState
		}
	],
	bootstrap: [ EventsAppComponent ]

})

export class AppModule {}


function checkDirtyState(component:CreateEventComponent){
	if(component.isDirty)
		return window.confirm('You have not saved this event, do you really want to cancel?');
	return true;
}