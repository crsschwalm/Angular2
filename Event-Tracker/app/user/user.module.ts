import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile.component';
import { LoginComponent} from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//BEST PRACTICE is to have a module for each feature. This app is very minimalistic, so we have a module for the user group of features
//notice, we dont add the Auth.Service to the providers array because we already registered it in the app.module. we dont declare things twice. we can import that service from the app.module instead
//We keep it in app.module because we call the auth.service there too

//https://angular.io/docs/ts/latest/guide/ngmodule.html
@NgModule({
	imports: [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	//For routing, refer to these docs
	//https://angular.io/docs/ts/latest/api/router/index/RouterModule-class.html
	RouterModule.forChild(userRoutes)
	],
	declarations: [
	ProfileComponent,
	LoginComponent
	],
	providers: [

	]
})

export class UserModule{

}