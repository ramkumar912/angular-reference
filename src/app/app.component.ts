import { Component } from '@angular/core';
import {commonService } from './common.services';
@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    constructor(private common:commonService){
            this.common.sub.subscribe(x=> console.log("app component value",x));
    }
 }