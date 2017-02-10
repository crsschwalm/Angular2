import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component ({
	selector: 'ai-star',
	moduleId: module.id,
	templateUrl: 'star.component.html',
	styleUrls: ['star.component.css']

})

export class StarComponent {
	//grab the rating from the component above
	@Input() rating: number;
	@Input() name: string;
	starWidth: number;
	//notify event with a string payload 
	//sends back to parent the onClick change
	@Output() ratingClicked: EventEmitter<string>= new EventEmitter<string>();

	onClick():void {
		this.ratingClicked.emit(`${this.name} was rated ${this.rating}/5`)
	}

	ngOnChanges():void {
		this.starWidth = this.rating * 86/5;
	}
}