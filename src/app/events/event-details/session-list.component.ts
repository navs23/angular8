import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';
import { filter, sequenceEqual } from 'rxjs/operators';

@Component({
    selector:'session-list',
    templateUrl:'./session-list.component.html',
    styles:[]

})
export class SessionListComponent implements OnChanges{
    @Input() filterBy:string;
    @Input() sortBy:string;
    @Input() sessions:ISession[];
    visibleSessions:ISession[]=[];
    @Input() fname:string;

    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        let objectName = (Object.keys(changes)[0]);
       if (this.sessions){
          if (objectName.toLowerCase()==="filterby")
            this.filterSessions(this.filterBy);
          else if (objectName.toLowerCase()==="sortby")  
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc):this.visibleSessions.sort(sortByVotes);
       }
    }
    filterSessions(filter: string) {
        console.log("now filtering %s , %s",filter,this.fname);
        if (filter === "all"){
             this.visibleSessions = this.sessions.slice(0);
        }
        else {
              this.visibleSessions = this.sessions.filter(session=>{return session.level.toLocaleLowerCase()===filter});                            
        }
        
    }
   
}

function sortByNameAsc(s1:ISession,s2:ISession){
    if (s1.name.toLocaleLowerCase() > s2.name.toLocaleLowerCase()) return 1;
    if (s1.name.toLocaleLowerCase() < s2.name.toLocaleLowerCase()) return -1;
    return 0;

}
function sortByVotes(s1:ISession,s2:ISession){
    
    return s2.voters.length - s1.voters.length;

}