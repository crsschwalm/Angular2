import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Subject, Observable } from 'rxjs/RX';

@Injectable()
export class AuthService {
	constructor(private http: Http) {}

	currentUser: IUser;
	loginUser(username:string, password:string){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		let loginInfo = { username: username, password: password };

		return this.http.post('/api/login', JSON.stringify(loginInfo), options).do( response => {
			if(response) {
				this.currentUser = <IUser>response.json().user;
			}
		}).catch(error => {
			//return the observable false.
			return Observable.of(false);
		})
	}

	isAuthenticated() {
		return !!this.currentUser;
	}

	checkAuthenticationStatus(){
		return this.http.get('/api/currentIdentity').map((response: any) => {
			if(response._body){
				return response.json();
			} else {
				return {}
			}
		}).do(currentUser =>{
			if (!!currentUser.userName) {
				this.currentUser = currentUser;
			}
		}).subscribe();
	}

	updateCurrentUser(firstName:string, lastName:string){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		this.currentUser.firstName = firstName;
		this.currentUser.lastName = lastName;

		return this.http.put(`/api/users/${this.currentUser.id}`, JSON.stringify(this.currentUser), options);
	}

	logout(){
		this.currentUser = undefined;
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.post('/api/logout', JSON.stringify({}), options);
	}
}