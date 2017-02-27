import { Component, OnInit, Inject, ElementRef, Input, ViewChild} from '@angular/core';
import { JQ_TOKEN } from './index';

@Component({
	//Selector decorator will be the unique identifier when referencing the component in the template
	selector: 'simple-modal',
	//using {{variable}} notation in the template binds the variable to the class's declared value. see the input variable
	//the input variable is brought into the class through parent or element attributes see app/navbar.component.html
	//for elementId, we do this dynamic id so that the modal can be brought in multiple times with different Ids
	template: `
	<div id="{{elementId}}" #modalContainer class="modal fade" tabindex="-1">
		<div class="modal-dialog">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
				<h4 class="modal-title">{{title}}</h4>
			</div>
			<div class="modal-body" (click)="closeModal()">
				<ng-content></ng-content>
			</div>
		</div>
	</div>
	`,
	styles: [`
		.modal-body { height: 250px; overflow-y: scroll; }
	`]
})

export class SimpleModalComponent {
	@Input() title: string;
	@Input() elementId: string;
	@Input() closeOnBodyClick: string;
	//pass in a string that references an Angular2 local ref variable
	//we'll call it containerElement because it is on the div that contains the modal
	//This points at the DOM node that is our template above ^^
	//https://angular.io/docs/ts/latest/api/core/index/ViewChild-decorator.html
	@ViewChild('modalContainer') containerEl: ElementRef;

	constructor(@Inject(JQ_TOKEN) private $: any){}

	closeModal(){
		if(this.closeOnBodyClick.toLocaleLowerCase() === "true"){
			//ViewChild gets us access to the specific DOM node
			this.$(this.containerEl.nativeElement).modal('hide');
		}
	}
}