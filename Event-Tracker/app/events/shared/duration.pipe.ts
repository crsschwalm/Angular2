import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	//like a selector, when referencing, use the name
	name: 'duration'
})

//PipeTransform implements transform.
export class DurationPipe implements PipeTransform {
	//Transform takes a value(we choose the type), then returns something(we choose the type)
	//for this, we input a number (1-4) and that corresponds to a time of day. we return the time of day as a string to be displayed
	transform(value: number): string {
		switch(value){
			case 1: return 'Half Hour'
			case 2: return 'One Hour'
			case 3: return 'Half Day' 
			case 4: return 'Full Day'
			default: return value.toString();
		}
	}
}