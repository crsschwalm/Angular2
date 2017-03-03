import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
//Since this is a component we reference in our template, we need to include it
import { UpvoteComponent } from './upvote.component';
import { CollapsibleWellComponent } from '../../common/collapsible-well.component';
//Same with the custom pipe
import { DurationPipe } from '../shared/duration.pipe';
import { SessionListComponent } from './session-list.component';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';
import { By } from '@angular/platform-browser';



//DEEP INTEGRATION TEST - Test Parent component and child components from the template
describe('SessionListComponent', () => {
	//fixture is a wrapper around the component
	//gives access to a few more pieces to the component
	let fixture: ComponentFixture<SessionListComponent>,
		component: SessionListComponent,
		element: HTMLElement,
		debugEl: DebugElement;

	//Wraps a test function in an asynchronous test zone
	beforeEach(async(() => {
		let mockAuthService = {
			//Our Template calls userHasVoted(user) which calls isAuthenticated. We need to initialize this by forcing it to return true
			isAuthenticated: () => true,
			//Set the current user for the voted method and authentication
			currentUser: { username: 'Carson' },
		};
		let mockVoterService = {
			//Our Template calls userHasVoted(user) lets just set it to true to initialize
			userHasVoted: () => true
		};

		//Created just as we create a custom module
		TestBed.configureTestingModule({
			imports: [],
			declarations :[
				UpvoteComponent,
				SessionListComponent,
				DurationPipe,
				CollapsibleWellComponent
			],
			//We dont want to give the real Service, so we use longhand for the provider array and when referencing the Service, use mockService 
			providers: [
				{ provide: AuthService, useValue: mockAuthService },
				{ provide: VoterService, useValue: mockVoterService }
			],
			schemas: []
			//necessarry when not using WebPack
			//compiles template and style sheets (asnyc)
		}).compileComponents();
	}))

	beforeEach(() => {
		//Creates component fixture
		fixture = TestBed.createComponent(SessionListComponent);
		//get handle to the component
		component = fixture.componentInstance;
		//handle to debug
		debugEl = fixture.debugElement;
		//handle to native element
		element = fixture.nativeElement;
	})

//Check that initial bindings are correct
	describe('initial display', () => {
		it('should have the correct session title', () => {
			/*
			*
			*initialize the bound variables
			*This could be put in a before each to initialize for multiple tests... 
			*but if there isnt alot of initialization, best practice is to show the entire story of the test we are currently running in each it()
			*
			*/
			component.sessions = [{ id:4, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['John', 'Bob']}];
			component.filterBy = 'all';
			component.sortBy = 'name';
			component.eventId = 3;

			//need visible sessions to pass the top div's *ngFor
			//Fire the ngOnChanges
			component.ngOnChanges();
			//rerender output to HTML
			fixture.detectChanges();
			//handle to root level DOM node (element) HTML elements have query selector to find first instance of (param)
			expect(element.querySelector('[well-title]').textContent).toContain('Session 1');

			//instead of using Native element, we can use debug element. same result as above
			//expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
		})
	})
})