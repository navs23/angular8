import { EventListComponent 
,EventDetailsComponent
,CreateEventComponent
,Error404Component
,EventRouteActivator
,EventListResolver
} from './app/index';
//import { EventDetailsComponent } from './app/events/event-details/event-details.component';
 import { Routes } from '@angular/router';
import { CreateEventSessionComponent } from './app/events/event-details/create-event-session';

export const appRoutes:Routes = [
{path:'events',component:EventListComponent,resolve:{events:EventListResolver}},
{path:'events/new',component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
{path:'events/:id',component:EventDetailsComponent,canActivate:[EventRouteActivator]},
{path:'404',component:Error404Component},
{path:'',redirectTo:'/events',pathMatch:'full'},
{path:'user',loadChildren:'./user/user.module#UserModule',},
{path:'events/sessions/new',component:CreateEventSessionComponent}

]