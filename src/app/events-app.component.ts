import { Component } from '@angular/core';

@Component({
  selector: 'events-app-root',
  template: `  
  <nav-bar></nav-bar> 
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./events-app.component.css']

})
export class EventsAppComponent {
  title = 'angular-fundamentals';
}
