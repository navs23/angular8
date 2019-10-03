import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
selector:'login',
templateUrl:'./login.component.html',
styles:[]

})
export class LoginComponent {
constructor (private auth:AuthService,private router: Router){}

login(formValues){
    
this.auth.loginUser(formValues.userName, formValues.password);
    console.log(formValues);
    this.router.navigate(['/events'])

}
cancel (){

    this.router.navigate(['/events'])
}

}