import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	templateUrl: 'login.component.html',
	styles: [`
	 em { float: right; color: #E05C65; padding-left: 10px}
	`]
})
export class LoginComponent implements OnInit {
	constructor(private auth:AuthService, private router:Router) {}

	login(user){
		this.auth.loginUser(user.userName, user.password);
		this.router.navigate(['events']);
	}

	cancel(){
		this.router.navigate(['events']);
	}

	ngOnInit() {
		
	}
}