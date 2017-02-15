import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Custom Services
import { ToastrService } from './common/toastr.service';
import { AuthService } from './user/auth.service';

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
	DurationPipe

} from './events/index';
//Custom Components
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

import { appRoutes } from './routes';

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
		DurationPipe
	],
	providers: [ 
		EventService,
		ToastrService,
		EventRouteService,
		EventListResolver,
		AuthService,
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