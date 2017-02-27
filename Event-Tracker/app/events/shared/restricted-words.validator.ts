import { FormControl } from '@angular/forms';

//Custom Validator for the create-session component
export function restrictedWords(words){
	return (control:FormControl): {[key: string]:any} => {
		//if no words to check, return null
		if(!words) return null;
		
		var invalidWords = words
			//loop over array of words. see if the control.value.includes each word in the array
			.map(w => control.value.includes(w) ? w : null)
			//loop over new array to remove the words that arent illegaly used
			.filter(w => w != null);

		//if there are invalid words and its more than 0, return the array as keyword 'restrictedWords'.. else return null
		return invalidWords && invalidWords.length > 0 
			? {'restrictedWords': invalidWords.join(', ')} 
			: null;
	}
}