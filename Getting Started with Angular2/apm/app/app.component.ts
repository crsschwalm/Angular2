//import {library name} from 'module name';
import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

//@importedLibName
@Component({
	//selector: 'name-of-element';
	selector: 'pm-app',
	//use templates that will go in (like directive template) file or direct html
	//use back tick `` instead of quote ''
	template: `
	<div>
		<nav class='navbar navbar-default'>
			<div class='container-fluid'>
				<ul class='nav navbar-nav'>
					<li><a [routerLink]="['/welcome']">Home</a></li>
					<li><a [routerLink]="['/products']">Product List</a></li>
				</ul>
			</div>
		</nav>
		<div class='container'>
			<router-outlet></router-outlet>
		</div>
	</div>
	`,
	//makes this service available to any child components
	providers: [ ProductService ]
})

//export to allow for other components to import and reference
//export class FeatureComponent (This is the main component, so use App)
//Strongly typed - set variables that are then managable in the DOM
export class AppComponent {
	pageTitle: string = 'Acme Product Management';
}