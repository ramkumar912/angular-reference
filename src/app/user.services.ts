import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule,HttpErrorResponse  } from '@angular/common/http';
import { product } from '../app/_models/hexa';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:product[]=[]
  API: string = 'https://api.onlinewebtutorblog.com/employeess';  
  constructor(private http: HttpClient) {  }

  getallProducts():Observable<product>{
    return this.http.get<product>(this.API)
  } 
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
      console.log(errorMessage)
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      console.log(errorMessage)
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
