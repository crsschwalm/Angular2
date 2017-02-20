import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
	selector: '[validateLocation]',
	//add the LocationValidator to the NG_VALIDATORS list of services
	providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidatorDirective, multi: true }]
})
export class LocationValidatorDirective implements Validator{
	/**
	 * implementing validate requires validate
	 *
	 * Location validator requires that either all location fields OR onlineURL field is filled out
	 * 
	 * @param {FormGroup} formGroup
	 * return object with a key of type string and value of type any
	 * returning null passes validation
	 * returning key with false fails the validator
	 */
	validate(formGroup: FormGroup): { [key: string]: any } {
		let addressControl = formGroup.controls['address'];
		let cityControl = formGroup.controls['city'];
		let countryControl = formGroup.controls['country'];
		//for this, the validator is going to the sibling of where our selector is.
		//we need to go up to the parent element to reach the sibling
		//casting the type of the parent (form -> formgroup) gives controls to access that element
		let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

		if((addressControl && addressControl.value 
			&& cityControl && cityControl.value 
			&& countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
			return null;
		} else {
			return {validateLocation: false};
		}
	}
}