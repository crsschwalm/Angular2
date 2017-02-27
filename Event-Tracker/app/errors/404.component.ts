import { Component } from '@angular/core'

//Simple Component that displays an error message because the user was redirected for illegal route or lack of Authentication
@Component({
  template: `
    <h1 class="errorMessage">404'd</h1>
  `,
  styles: [`
    .errorMessage { 
      margin-top:150px; 
      font-size: 170px;
      text-align: center; 
    }`]
})
export class Error404Component{
  constructor() {

  }

}