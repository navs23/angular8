import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
declare let toastr:IToastr;
import { 
//    AppRoutingModule 
    EventsAppComponent
    ,EventListComponent
    ,EventService
    ,EventThumbnailComponent
    
    ,EventDetailsComponent
    ,NavbarComponent
    ,CreateEventComponent
    ,Error404Component
    ,EventRouteActivator
    ,EventListResolver
} from './index';
import {AppRoutingModule } from './app-routing.module'
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEventSessionComponent } from './events/event-details/create-event-session';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CollapsibleComponent } from './common/collapisble-well.component';
import { DurationPipe } from './user';
import { TOASTR_TOKEN, IToastr } from './common';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavbarComponent,
    CreateEventComponent,
    Error404Component,
    CreateEventSessionComponent,
    SessionListComponent,
    CollapsibleComponent,
    DurationPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
    
  ],
  providers: [EventService,
    ,{provide: TOASTR_TOKEN,useValue:toastr }
    ,EventRouteActivator,
    {provide:'canDeactivateCreateEvent',useValue:checkDirtyState},
    EventListResolver,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class EventsAppModule { }
export function checkDirtyState(creatEvent:CreateEventComponent) {
  if(creatEvent.isDirty)
  return window.confirm('You have not saved this event, do you really want to cancel?');
  else return true;
}