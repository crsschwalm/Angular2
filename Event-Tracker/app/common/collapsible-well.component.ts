import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'collapsible-well',
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