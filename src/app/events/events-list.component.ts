import {Component, OnInit} from '@angular/core';
import { EventService } from './shared/index';


import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({

//selector : "event-list",
template:`
<h1>Upcoming Angular Events </h1>
<div *ngFor = "let evnt of events">
<event-thumbnail [event]="evnt" (click)="handleThumbnailClick(evnt.name)" ></event-thumbnail>
</div>
`

})
export class EventListComponent implements OnInit{
    events:IEvent[];
    constructor (private eventService:EventService,
        private route:ActivatedRoute) {
     
    }

    ngOnInit(){
         //this.eventService.getEvents().subscribe(events=> {this.events = events})
         this.events = this.route.snapshot.data['events']  ; 
         console.log(this.events);
    }
    handleThumbnailClick(eventName:string){
        
        console.log(eventName);
    }
}

