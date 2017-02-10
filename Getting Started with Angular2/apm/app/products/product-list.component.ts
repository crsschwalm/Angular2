import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

@Component({
	//use this to allow for component relative file paths
	moduleId: module.id,
	//relative to index.html location
	templateUrl: 'product-list.component.html',
	styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {
	pageTitle: string = 'Product List';
	imageWidth: number = 50;
	imageMargin: number = 2;
	showImage: boolean = false;
	listFilter: string;
	errorMessage: string;
	//arrays that dont have a specific data type
	products: IProduct[];
	
	//create local variable for the constructor for calling => _productService with type: ProductService.
	//works with public and protected vars as well
	//usually a constructor is implicitly created.  explicit constructors are used when injecting services
	//used for initialization 
	constructor(private _productService: ProductService){
	}

	toggleImage():void {
		this.showImage = !this.showImage;
	}

	ngOnInit():void {
		//subscribe to observable
		this._productService.getProducts()
			.subscribe(products => this.products = products,
				error => this.errorMessage = <any>error);
	}

	onRatingClicked(message: string):void {
		this.pageTitle = 'Product List: '+ message;
	}
}