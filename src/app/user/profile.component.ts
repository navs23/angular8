import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Inject } from '@angular/core';
import { TOASTR_TOKEN, IToastr } from '../common';

@Component({  
  templateUrl: './profile.component.html',
  styles:[`
  em { float:right;color:red;color:#E05c65;padding-left:10px;}
  .error input {background-color:#E05c65;}
  .error :: -webkit-input-placeholder {color:#999;}
  .error :: -moz-input-placeholder {color:#999;}
  .error :: -ms-input-placeholder {color:#999;}
  `]
})
export class ProfileComponent implements OnInit {
  ngOnInit(): void {
    
  }

  profileForm = new FormGroup({
    firstName: new FormControl(this.auth.currentUser.firstName ,
          [
                Validators.required,
                Validators.minLength(8)
    ]),
    lastName: new FormControl(this.auth.currentUser.lastName || '',
          [     
                Validators.required,
                Validators.minLength(8)
    ])
   
  });
     
  constructor (private router:Router,
    private auth:AuthService,
    @Inject(TOASTR_TOKEN) private toastr:IToastr)
    {

  }
  cancel(){
    console.log('cancelling')
    this.navigateToEvents()
}
saveProfile(){
  if (this.profileForm.valid){
    console.log('saving data')
    //this.navigateToEvents()
    this.toastr.success("changes saved successfully");

  }
  else
  console.log('invalid form data')
}
navigateToEvents(){
  this.router.navigate(['/events'])
}
validateFirstName(){
  return (this.profileForm.controls.firstName.valid || this.profileForm.controls.touched)
}
validateLastName(){
  return (this.profileForm.controls.firstName.valid || this.profileForm.controls.touched)
}
}