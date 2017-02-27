import { Injectable } from '@angular/core';
import { ISession } from '../shared/event.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Subject, Observable } from 'rxjs/Rx';


@Injectable()

export class VoterService {

	constructor(private http: Http) {}

	deleteVoter(eventId: number, session: ISession, voterName: string){
		let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
		//update to filter through voters array
		//for each item. compare so its not the voterName param
		session.voters = session.voters.filter(voter => voter !== voterName);
		//self subscribing is ok when we dont need to map the response.
		this.http.delete(url).catch(this.handleError).subscribe();
	}
	//Push new voter to session.voter array
	addVoter(eventId: number, session: ISession, voterName: string){
		session.voters.push(voterName);
		let headers = new Headers({ 'Content-Type': 'application/json'});
    	let options = new RequestOptions({headers: headers});
    	let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
		//self subscribing is ok when we dont need to map the response.
    	this.http.post(url, JSON.stringify({}), options).catch(this.handleError).subscribe();
	}
	//some returns boolean. look at each item in voters array and see if there is one that === voterName param
	//this goes through all elements to see if there is even one. wont return until all are checked
	userHasVoted(session: ISession, voterName: string){
		return session.voters.some(voter =>voter === voterName);
	}
	//Basic Error handling to show how to catch
	private handleError( error: Response ){
    	return Observable.throw(error.statusText);
  	}
	
	
}