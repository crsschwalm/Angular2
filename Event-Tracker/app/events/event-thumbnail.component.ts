import { Component, Input } from '@angular/core';
import { IEvent } from './shared/event.model';

@Component({
	selector: 'event-thumbnail',
	//pipes | help to structure the formatting of bound elements.  we have a custom pipe in the shared folder and is referenced in the create-event component
	template: `
	<div [routerLink]="['/events', event.id]" class='well hoverwell thumbnail'>
		<h2>{{ event?.name | uppercase }}</h2>
		<div>Date: {{event?.date | date}}</div>
		<div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
			Time: {{event?.time}} (
			<span *ngSwitchCase="'8:00 am'">Early Start</span>
			<span *ngSwitchCase="'10:00 am'">Late Start</span>
			<span *ngSwitchDefault>Normal Start</span>
			)
		</div>
		<div>Price: {{event?.price | currency:'USD':true:'1.2-2'}}</div>
		<div *ngIf="event?.location">
			<span>Location: {{event?.location?.address}}</span>
			<span class='pad-left'>{{event?.location?.city}}, {{event?.location?.country}}</span>
		</div>
		<div [hidden]="!event?.onlineUrl">
			Online URL: {{ event?.onlineUrl }}
		</div>
	</div>
	`,
	styles: [`
		.bold { font-weight: bold; }
		.green { color: #003300 !important; }
		.thumbnail { min-height: 210px; }
		.pad-left { margin-left: 10px; }
		.well div { color: #bbb; }
	`]
})
export class EventThumbnailComponent {
	//retrieve the input using @Input() inputParameter: type;
	@Input() event: IEvent;

	getStartTimeClass() {
		const isEarlyStart = this.event && this.event.time === '8:00 am';
		return {green: isEarlyStart, bold: isEarlyStart};
	}

}