import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	moduleId: module.id,
	templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent {
	pageTitle: string = 'Product Detail';
	product: IProduct;

	constructor(private _route: ActivatedRoute,
		private _router: Router){
	}

	ngOnInit():void {
		//+ turns the variable to a number
		let id= +this._route.snapshot.params['id'];
		this.pageTitle += `: ${id}`;
	}

	onBack():void {
		this._router.navigate(['/products']);
	}
}