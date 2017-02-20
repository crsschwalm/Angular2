import { Injectable } from '@angular/core';
import { ISession } from '../shared/event.model';



@Injectable()

export class VoterService {

	deleteVoter(session: ISession, voterName: string){
		//update to filter through voters array
		//for each item. compare so its not the voterName param
		session.voters = session.voters.filter(voter => voter !== voterName);
	}
	//Push new voter to session.voter array
	addVoter(session: ISession, voterName: string){
		session.voters.push(voterName);
	}
	//some returns boolean. look at each item in voters array and see if there is one that === voterName param
	//this goes through all elements to see if there is even one. wont return until all are checked
	userHasVoted(session: ISession, voterName: string){
		return session.voters.some(voter =>voter === voterName);
	}
	
	constructor() {}
}