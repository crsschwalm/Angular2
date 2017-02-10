//Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module'

//Components Pipes & Directives
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { SharedModule } from '../shared/shared.module';

//Services
import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product.service';

@NgModule({
	declarations: [
		ProductListComponent,
		ProductDetailComponent,
		ProductFilterPipe,
	],
	imports: [
		SharedModule,
		ProductRoutingModule
	],
	providers: [
    	ProductDetailGuard,
    	ProductService
  	]
})



export class ProductModule {}