import { InjectionToken } from '@angular/core';

declare let toastr:any;
export let TOASTR_TOKEN = new InjectionToken<IToastr>("toastr")

export interface IToastr{
success(msg:string,title?:string):void;
info(msg:string,title?:string):void;
waring(msg:string,title?:string):void;
error(msg:string,title?:string):void;
}