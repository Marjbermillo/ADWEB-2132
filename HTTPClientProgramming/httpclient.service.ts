import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private http :HttpClient) { }
 
  getUsersfromServer(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getTodofromServer(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5%27')
  }
  
}
