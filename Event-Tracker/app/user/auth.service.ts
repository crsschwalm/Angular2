import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
	constructor() {}

	currentUser: IUser;
	loginUser(username:string, password:string){
		this.currentUser = {
			id: 2,
			firstName: 'Carson',
			lastName: 'Schwalm',
			username: 'cschwalm'
		}
	}

	isAuthenticated() {
		return !!this.currentUser;
	}

	updateCurrentUser(firstName:string, lastName:string){
		this.currentUser.firstName = firstName;
		this.currentUser.lastName = lastName;
	}
}