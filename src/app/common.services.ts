import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { product } from './_models/hexa';
import { Observable, Subject,BehaviorSubject, ReplaySubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class commonService {
  sub!:Subject<number>;
  obj$!:Observable<number>;
  behsub!:BehaviorSubject<number>;
  behobj$!:Observable<number>;
  replaysub!:ReplaySubject<number>;
  replayobj$!:Observable<number>;

  constructor() { 
    this.sub = new Subject<number>();
    this.obj$ = this.sub.asObservable();
    this.behsub= new BehaviorSubject<number>(1000);
    this.behobj$=this.behsub.asObservable();
    this.replaysub=new ReplaySubject<number>(2);
    this.replayobj$=this.replaysub.asObservable();
   }

   sendData(data:any){
    this.behsub.next(data);
    console.log(this.behsub)
   }
}
