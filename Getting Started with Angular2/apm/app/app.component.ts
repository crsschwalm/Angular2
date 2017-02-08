//import {library name} from 'module name';
import {Component} from '@angular/core';

//@importedLibName
@Component({
	//selector: 'name-of-element';
	selector: 'pm-app',
	//use templates that will go in (like directive template) file or direct html
	//use back tick `` instead of quote ''
	template: `
	<div>
		<h1>{{pageTitle}}</h1>
		<div>My First Component</div>
	</div>
	`
})

//export to allow for other components to import and reference
//export class FeatureComponent (This is the main component, so use App)
//Strongly typed - set variables that are then managable in the DOM
export class AppComponent {
	pageTitle: string = 'Acme Product Management';
}