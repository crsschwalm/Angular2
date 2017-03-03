// Unit Testing
import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';
import { Observable } from 'rxjs/Rx';

/*
*
* Jasmine Testing
* 
*describe() -- Containing function for the suite of tests
*beforeEach() -- Common Setup
*it() -- Creates seperate unit tests
*expect() -- did it pass?
*
* Karma - Runs tests in browser
* 
 */
describe('VoterService', () => {
	let voterService: VoterService,
		mockHttp;

	beforeEach(() => {
		//create instance of mockHttp so it doesnt actually post or delete data
		mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post'])
		voterService = new VoterService(mockHttp);
	});

//Test the Delete function
	describe('deleteVoter', () => {
		//First Test
		it('should remove the voter from the list of voters', () => {
			var session = {
				id: 6,
				voters: ['john', 'joe'] 
			};
			mockHttp.delete.and.returnValue(Observable.of(false));
			voterService.deleteVoter(3, <ISession>session, "joe");

			//2 expects are one logical expectation in this example
			expect(session.voters.length).toBe(1);
			expect(session.voters[0]).toBe('john');
		})

		//Second Test
		it('should call http.delete with the right URL', () => {
			var session = {
				id: 6,
				voters: ['john', 'joe'] 
			};
			//needs tp return an observable, so we tell the spy to do so
			mockHttp.delete.and.returnValue(Observable.of(false));
			voterService.deleteVoter(3, <ISession>session, "joe");

			expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe')
		})
	})

//Test the Add function
	describe('addVoter', () => {
		//Third function
		it('should call http.post with the right URL', () => {
			var session = {
				id: 6,
				voters: ['john'] 
			};
			mockHttp.post.and.returnValue(Observable.of(false));
			voterService.addVoter(3, <ISession>session, "joe");

			expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe', "{}", jasmine.any(Object));
		})
	})
})

