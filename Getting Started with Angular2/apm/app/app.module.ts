//Native Components and Services
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//Custom Components and Services
import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-guard.service';
import { ProductDetailComponent } from './products/product-detail.component';
import { StarComponent } from './shared/star.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
  	HttpModule,
  	RouterModule.forRoot([
		{	path: 'products', component: ProductListComponent	},
		{	path: 'product/:id', 
      canActivate: [ ProductDetailGuard ], 
      component: ProductDetailComponent	},
		{	path: 'welcome', component: WelcomeComponent	},
		{	path: '', redirectTo: 'welcome', pathMatch: 'full'	},
		{	path: '**', component: WelcomeComponent		}
	]) ],

  declarations: [ 
  	AppComponent, 
  	ProductListComponent,
  	ProductFilterPipe,
  	StarComponent,
  	WelcomeComponent,
  	ProductDetailComponent ],
  providers: [
    ProductDetailGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }



