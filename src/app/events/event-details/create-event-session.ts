import { Component, OnInit, Output,EventEmitter } from "@angular/core";
import { FormControl, Validators, FormGroup, ControlContainer } from '@angular/forms';
import { ISession,restrictedWords } from '../shared';
import { Router } from '@angular/router';


@Component(
    {
        selector:'create-session',
        templateUrl:'./create-event-session.html',
        styles:[`
        em { float:right;color:red;color:#E05c65;padding-left:10px;}
        .error input {background-color:#E05c65;}
        .error textarea {background-color:#E05c65;}
        .error :: -webkit-input-placeholder {color:#999;}
        .error :: -moz-input-placeholder {color:#999;}
        .error :: -ms-input-placeholder {color:#999;}
        `]

    }
)
export class CreateEventSessionComponent implements OnInit  {
    @Output() saveNewSession = new EventEmitter()
    @Output() cancelSession= new EventEmitter()
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;
    newSessionForm: FormGroup;
    
    constructor(private router:Router){

    }

    ngOnInit(): void {
        this.name = new FormControl('',Validators.required)
        this.presenter = new FormControl('',Validators.required)
        this.duration = new FormControl('',Validators.required)
        this.level = new FormControl('',Validators.required)
               
        this.abstract = new FormControl('',[Validators.required,Validators.maxLength(400),restrictedWords(['foo','bar'])])
        this.newSessionForm = new FormGroup({
            name:this.name,
            presenter:this.presenter,
            duration:this.duration,
            level:this.level,
            abstract:this.abstract
        })

    }

    saveSession(formValues){
        let session :ISession= {
        id:undefined,
        name:formValues.name,
        presenter:formValues.presenter,
        duration:+formValues.duration,
        level:formValues.level,
        abstract:formValues.abstract,
        voters:[]
        }

        console.log(JSON.stringify(session))
        this.saveNewSession.emit(session)

    }
    validateAbstractError():boolean{
        let isValid:boolean=false;
        isValid= ((this.abstract.invalid && this.abstract.dirty) && 
            (
            
            this.abstract.errors.maxlength
            || 
            this.abstract.errors.restrictedWords.length>0
            )
        )
        console.log("isvalid %s",isValid);
        return isValid;
    }
    cancel(){
      this.cancelSession.emit();
    }
}