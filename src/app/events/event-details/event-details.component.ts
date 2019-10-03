import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { ISession } from '../shared';

@Component({
    templateUrl : "./event-details.component.html",
    styles: [`
    .container { padding-left:20px; padding-right:20px;}
    .event-image:{ height:100px;}
}

    `]
    
    
})
export class EventDetailsComponent implements OnInit{
    event:any;
    addMode:boolean=false
    filterBy: string='all';
    sortBy:string ='votes';

constructor ( private eventService:EventService,
                private route:ActivatedRoute){
        console.log('event details')
}
ngOnInit(){
this.event = this.eventService.getEventById(+this.route.snapshot.params['id']);
}

addSession(){
    this.addMode = !this.addMode
}
saveNewSession(session:ISession){

    console.log('save new session called')
const nextId = Math.max.apply(null,this.event.sessions.map(s=>s.id))
session.id = nextId + 1
this.event.sessions.push(session)
this.addMode = false;
}
cancelSession(mode){
this.addMode= false;
}

}