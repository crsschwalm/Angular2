import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/index';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';

@Component({
	moduleId: module.id,
	selector: 'session-list',
	templateUrl: 'session-list.component.html'
})
export class SessionListComponent implements OnInit {
	@Input() sessions:ISession[];
	@Input() filterBy: string;
	@Input() sortBy: string;
	visibleSessions: ISession[] = [];

	constructor(private auth: AuthService, private voterService: VoterService) {}

	ngOnInit() {		
	}

	ngOnChanges() {
		if(this.sessions){
			this.filterSessions(this.filterBy);
			this.sortBy ==='name' ? this.visibleSessions.sort(sortByName) : this.visibleSessions.sort(sortByVotes);
		}	
	}

	toggleVote(session: ISession){
		if(this.userHasVoted(session)){
			this.voterService.deleteVoter(session, this.auth.currentUser.username);
		} else {
			this.voterService.addVoter(session, this.auth.currentUser.username);
		}

		if(this.sortBy === 'votes') {
			this.visibleSessions.sort(sortByVotes);
		}
	}

	userHasVoted(session: ISession){
		return this.voterService.userHasVoted(session, this.auth.currentUser.username);
	}

	filterSessions(filter){
		if(filter === 'all'){
			//clone array. dont make pointer to original.
			this.visibleSessions = this.sessions.slice(0);
		} else {
			this.visibleSessions = this.sessions.filter(session => {
				return session.level.toLocaleLowerCase() === filter;
			})
		}
	}
}


function sortByName(s1: ISession, s2: ISession) {
	if (s1.name > s2.name) {
		return 1;
	} else if(s1.name === s2.name){
		return 0;
	} else return -1;
}

function sortByVotes(s1: ISession, s2: ISession){
	return s2.voters.length - s1.voters.length;
}