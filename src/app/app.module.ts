import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { AppRoutingModule } from './app-routing.module';

import { ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home/home.component';
import { HexaComponent } from './hexa/hexa.component';
import {commonService} from './common.services';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component'



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    HexaComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  
  providers: [commonService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        
    // provider used to create fake backend
    fakeBackendProvider
],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
