import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()

export class ProductDetailGuard implements CanActivate {
	//CanActivate requires this function
	/**
	 * [canActivate description]
	 * @param  {ActivatedRouteSnapshot} route [description]
	 * @return {boolean}                      [description]
	 */
	
	constructor(private _router: Router){

	}

	canActivate(route: ActivatedRouteSnapshot): boolean {
		//the url path is an array of paths. id is index 1 of ['product', id]
		let id = +route.url[1].path;
		//if the id isnt a number or is les than 0
		if (isNaN(id) || id < 1) {
			alert('Invalid product Id');
			// start redirect to product list page
			this._router.navigate(['/products']);
			//abort current navigation
			return false;
		};
		//else return true
		return true;
	}

}