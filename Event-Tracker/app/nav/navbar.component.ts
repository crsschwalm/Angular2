import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events/shared/index';

@Component({
	selector: 'nav-bar',
	moduleId: module.id,
	templateUrl: './navbar.component.html',
	styles: [`
	li > a.active { color: #F97924; }
	.nav.navbar-nav { font-size: 15px; }
	#searchForm { margin-right: 100px; }
	@media (max-width: 1200px) {#searchForm {display: none}}
	`]
})

export class NavBarComponent {
	searchTerm: string = "";
	foundSessions: ISession[];

	constructor(private auth:AuthService, private eventService: EventService){}

	searchSessions(searchTerm){
		//utilize the eventService function to search the list of sessions
		this.eventService.searchSession(searchTerm).subscribe(sessions => {
			this.foundSessions = sessions;
			//console.log(this.foundSessions);
		})
	}
}