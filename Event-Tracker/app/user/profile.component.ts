import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN } from '../common/index';

@Component({
  moduleId: module.id,
  templateUrl: './profile.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px}
    .error input { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder: { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit{
  profileForm: FormGroup;
  private firstName:FormControl;
  private lastName:FormControl;

  constructor(private auth:AuthService, private router:Router, @Inject(TOASTR_TOKEN) private toastr){}
  
  ngOnInit(){
    //form control with validation (custom and angular) use FormControl(valueToValidate, [Validation Array])
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

//Cleans up what we put in the html. now we have a checker as a function rather than multiple logical operators in the view
  validateLastName(){
    return this.lastName.valid || this.lastName.untouched;
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched;
  }

  cancel(){
    this.router.navigate(['/events']);
  }

  saveProfile(formValues){
    if(this.profileForm.valid)
      //subscribe to the observable, when returned, toast and reroute
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName).subscribe(() => {
        this.toastr.success('Profile Saved');
        this.router.navigate(['/events']);
      });
  }

  logout(){
    //subscribe to the observable, when returned, reroute
    this.auth.logout().subscribe(() => {
      this.router.navigate(['/user/login']);
    })
  }
       
}