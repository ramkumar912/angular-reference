import { Component, OnInit} from '@angular/core';
import {observable,from, map, retry, Observable, of} from 'rxjs'
import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule,HttpErrorResponse } from '@angular/common/http';
import { ProductService } from '../user.services';
import {commonService } from '../common.services';
import { product } from '../_models/hexa';
import { Router } from '@angular/router';
import { Alert } from '@app/_models';



@Component({
  selector: 'app-hexa',
  templateUrl: './hexa.component.html',
  styleUrls: ['./hexa.component.scss']
})
export class HexaComponent implements OnInit {
  data: any;
  final: any;
  newArr:any;
  showDetail:any=false;
  showList:any=true;
  products:product[]=[]
  constructor(private http: HttpClient,private router: Router,private pvservice:ProductService,private common:commonService){
    var obj$:Observable<any> =of(1,2,3);
    obj$.subscribe(x=>console.log("",x));
    
  }
  emit () {
    this.common.sendData(Math.random())
  }

  ngOnInit(): void {   
     this.pvservice.getallProducts().subscribe(products=>{
      this.data = products as product ;
      this.data  = this.data.data

        this.final= this.data.filter(function(x:any) {  
          if(x.gender =='Female'){
            return x;
          } 
     })
     });}
   


    
  }





