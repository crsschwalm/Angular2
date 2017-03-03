import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared/event.model';
//Unit Testing

describe('SessionListComponent', () => {
	let component: SessionListComponent;
	let mockAuthService, mockVoterService;

	beforeEach(() => {
		//create instance of mock services
		component = new SessionListComponent(mockAuthService, mockVoterService);
	})
	//Test the ngOnChangesEvent
	describe('ngOnChanges', () => {

		//Test Filter
		it('should filter the session correctly', () => {
			//set the 4 input variables we need
			component.sessions = <ISession[]>[{name: 'session 2', level: 'intermediate'},
				{name: 'session 3', level: 'intermediate'},
				{name: 'session 1', level: 'advanced'}];
			component.filterBy = 'intermediate';
			component.sortBy = 'name';
			//this isnt being used, but we will set it just to be complete
			component.eventId = 3;
			//ngOnChanges gets called automatically in the app, but for testing we must call it 
			component.ngOnChanges();

			//since we are setting the filterBy to 'intermediate', we expect that the array of visible sessions doesnt include the advanced level
			expect(component.visibleSessions.length).toBe(2);
		})
		//Test Sort
		it('should filter the session correctly', () => {
			component.sessions = <ISession[]>[{name: 'session 2', level: 'intermediate'},
				{name: 'session 3', level: 'intermediate'},
				{name: 'session 1', level: 'advanced'}];
			component.filterBy = 'all';
			component.sortBy = 'name';
			component.eventId = 3;
			//ngOnChanges gets called automatically in the app, but for testing we must call it 
			component.ngOnChanges();

			//we set the original index of session 3 to [1], when sorted, it should be at [2]
			expect(component.visibleSessions[2].name).toBe('session 3');
		})
	})
})