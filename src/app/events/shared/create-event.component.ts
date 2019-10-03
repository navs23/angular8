import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent, EventService } from 'src/app/events/shared/';

@Component({
    selector:'new-event',
    templateUrl:'./create-event.component.html'            ,
    styles:[`
    em { float:right;color:red;color:#E05c65;padding-left:10px;}
    .error input {background-color:#E05c65;}
    .error :: -webkit-input-placeholder {color:#999;}
    .error :: -moz-input-placeholder {color:#999;}
    .error :: -ms-input-placeholder {color:#999;}
    `]
})
export class CreateEventComponent implements OnInit{
    isDirty:boolean = false;
    newEvent:IEvent
    ngOnInit(): void {
        this.newEvent = {
            id: 1,
            name: 'Angular Connect',
            date: new Date('9/26/2036'),
            time: '10:00 am',
            price: 599.99,
            imageUrl: '/app/assets/images/angularconnect-shield.png',
            location: {
              address: '1057 DT',
              city: 'London',
              country: 'England'
            },
            sessions:[]
        }
    }



saveEvent(data){
    this.eventService.SaveEvent(data)
}
constructor (private router:Router,private eventService:EventService){

}

cancel(){
    this.router.navigate(['/events'])
}
}