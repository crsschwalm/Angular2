//Best practice for implementing 3rd party libraries is to make a keyword for Angular to recognize
//this allows for keyword lookup
//https://angular.io/docs/ts/latest/api/core/index/OpaqueToken-class.html
import { OpaqueToken } from '@angular/core';

//pass in string to lookup the dependency injector
export let JQ_TOKEN = new OpaqueToken('jQuery');