import { Component, Input } from '@angular/core';

@Component({
selector:'collapsible-well',
template:`
<div (click)="toggleContent()" class="well pointable" style="background-color: cornflowerblue;border-radius:25px;">
<h4>
<ng-content select="[well-title]"></ng-content>
</h4>

<ng-content *ngIf="visible" select = "[well-body]" style="background-color:skyblue;"></ng-content>
</div>
`,
styles:[`
div.well {background-color:none;}
ok
`
]

})
export class CollapsibleComponent {
@Input() title:string;
visible:boolean=false;
toggleContent() {

this.visible = !this.visible;

}

}