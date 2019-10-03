import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../user';


@Component({
selector: 'nav-bar',
templateUrl:'./nav-bar.component.html',
styles:[`
em { float:right;color:red;}

`]

})
export class NavbarComponent{
    searchTerm:string="";
    foundSessions:ISession[]=[];
constructor(private auth:AuthService, private eventService:EventService){

console.log(auth.loginUser)
console.log(auth.isAuthenticated())

}

searchSessions(searchTerm:string){
this.eventService.searchSessions(searchTerm).subscribe((sessions)=>{
this.foundSessions = sessions;
console.log(this.foundSessions);
})
}
}