

        import {Component, Input} from '@angular/core';
import { IEvent } from './shared';
@Component({

selector : "event-thumbnail",
template:`
<div>                   
        <div [routerLink]="['/events',event.id]" class = "well hoverwell thumnail">
        <h2>{{event.name | uppercase}}</h2>
        <div>{{event.date | date}}</div>
        <div>{{event.time}}</div>        
        <div>{{event.price | currency:'USD'}}</div>
        <div>
        <span>{{event.location?.address}}</span>
        <span>&nbsp;,&nbsp;</span>
        <span>{{event.location?.city}}</span>
        <span>&nbsp;</span>
        <span>{{event.location.country}}</span>
        </div>
        </div>
        </div>

`

})
export class EventThumbnailComponent{
    @Input() event :IEvent;
    

}