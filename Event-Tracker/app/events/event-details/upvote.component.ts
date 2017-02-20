import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'upvote',
	styleUrls: ['upvote.component.css'],
	template: `
		<div class="votingWidgetContainer pointable" (click)="onClick()">
			<div class="well votingWidget">
				<div class="votingButton">
					<i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
				</div>
				<div class="badge badge-inverse votingCount">
					<div>{{count}}</div>
				</div>
			</div>
		</div>
	`
})
export class UpvoteComponent implements OnInit {
	@Input() count: number;
	//Inputs can use 'set' to refer to them as functions
	//the passed in parameter is the input value it returns
	//for this, we are returning a boolean so we can set a public variable iconColor to a string based on turnary operation
	@Input() set voted(val){
		this.iconColor = val ? 'red' : 'white';
	}
	@Output() vote = new EventEmitter();
	iconColor: string;

	constructor() {}

	ngOnInit() {
		
	}

	onClick(){
		//when clicking this event we pass up the chain that there has been a vote. this can be brought in through the parent and can activate a function
		//since there is no data to pass up. we just emit an empty object to let the parent know that the child event was activated
		this.vote.emit({});
	}
}