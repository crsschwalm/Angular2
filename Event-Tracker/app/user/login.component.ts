import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

//Example of how to use validation in the view
@Component({
	moduleId: module.id,
	templateUrl: 'login.component.html',
	styles: [`
	 em { float: right; color: #E05C65; padding-left: 10px}
	`]
})
export class LoginComponent implements OnInit {
	loginInvalid = false;

	constructor(private auth:AuthService, private router:Router) {}

	login(user){
		//Check with Authentication Service if the username and password are legal
		this.auth.loginUser(user.userName, user.password).subscribe(response => {
			if(!response){
				this.loginInvalid = true;
			} else {
				this.router.navigate(['events']);
			}
		});
	}

	cancel(){
		this.router.navigate(['events']);
	}

	ngOnInit() {
	}
}