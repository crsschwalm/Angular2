/*
*
*This is the core custom module in this application.  Best practice would be to have a core module that imports unique modules for each feature
*However, this application is relatively small and has only a small number of features
*https://angular.io/docs/ts/latest/guide/ngmodule.html
* 
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Custom Services
import { AuthService } from './user/auth.service';
/*
*
*Best practice for importing/exporting multiple files for features is "Barrelling" - See index file
* 
 */
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
	EventResolver,
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

//set these variables to allow the global object 'toastr' / 'jQuery' are available to be referenced
//These key words are then set to the provider service below
declare let toastr : Object;
declare let jQuery : Object;

@NgModule({
	//import angular modules or custom modules
	imports: [ 
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		//For the Routing, refer to these docs
		//https://angular.io/docs/ts/latest/api/router/index/RouterModule-class.html
		RouterModule.forRoot(appRoutes),
		HttpModule
	],
	//components created under this module (we only have one module) must be declared in order to be referenced
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
	//Services and 3rd Party libraries are imported to modules via this providers array
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
		EventResolver,
		EventListResolver,
		AuthService,
		VoterService,
		{ 
			provide: 'canDeactivateCreateEvent',
			useValue: checkDirtyState
		}
	],
	/*
	*
	* the bootstrap property is used, providing a list of components that should
	* be used as bootstrap entry points for the application. There is usually only 
	* one element in this array: the root component of the application
	* 
	 */
	bootstrap: [ EventsAppComponent ]

})

export class AppModule {}

/**
 * Checks to see if the user wants to leave the form prematurely
 * @param {CreateEventComponent} component - Create a new event form component.  Users can exit the form rather than submit (Cancel or redirect)
 */
function checkDirtyState(component:CreateEventComponent){
	if(component.isDirty)
		return window.confirm('You have not saved this event, do you really want to cancel?');
	return true;
}