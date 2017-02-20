//Best practice for implementing 3rd party libraries is to make a keyword for Angular to recognize
//this allows for keyword lookup
import { OpaqueToken } from '@angular/core';

//pass in string to lookup the dependency injector
export let TOASTR_TOKEN = new OpaqueToken('toastr');


//Wrap 3rd Party Libraries in services to avoid errors and allow for testing
//This isnt best practice but available if there the API is small enough

// import { Injectable } from '@angular/core';

// declare let toastr:any;

// @Injectable()
// export class ToastrService {
// 	success(message: string, title?: string){
// 		toastr.success(message, title);
// 	}

// 	info(message: string, title?:string){
// 		toastr.info(message, title);
// 	}

// 	error(message: string, title?: string){
// 		toastr.error(message, title);
// 	}
// }