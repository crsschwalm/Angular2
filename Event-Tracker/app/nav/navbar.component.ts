import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';

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
	constructor(private auth:AuthService){}
}