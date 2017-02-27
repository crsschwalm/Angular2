import { Component, OnInit } from '@angular/core';
/* 
*
*  This component creates a reusable well that collapses on click.  
*  USE: wrap the contents to hide inside selector element. contents will be input at the ng-content component
*  (If familiar with Angular1, similar to directive's transclude)
*  
*  See events/event-details/session-list.component.html for use
*   
*/
@Component({
	//Selector decorator will be the unique identifier when referencing the component in the template
	selector: 'collapsible-well',
	//when using ng-content we can choose where specific elements are placed based on there identifier
	//<ng-content select="[well-title]"></ng-content> === will insert ===>   <div well-title></div>
	//<ng-content select="[well-body]"></ng-content> === inserts ===>   <div well-body></div>
	template: `
		<div (click)="toggleContent()" class="well pointable">
			<h4>
				<ng-content select="[well-title]"></ng-content>
			</h4>
			<ng-content select="[well-body]" *ngIf="visible"></ng-content>
		</div>
	`
})

export class CollapsibleWellComponent implements OnInit {
	constructor() {}

	visible: boolean = true;

	ngOnInit() {
		
	}

	toggleContent(){
		this.visible = !this.visible;
	}
}