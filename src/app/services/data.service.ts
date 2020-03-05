import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';


// @Injectable({
//   providedIn: 'root'
// })
export class DataService {
  constructor(private http: HttpClient,private url:string) {

  }

  getAll(){
    return this.http.get(environment.URL+this.url);
  }
  get(url:string){
    return this.http.get(environment.URL+url);
  }
   getId(id:number){
    return this.http.get(environment.URL+this.url+"/"+id);

  }
  create(resource){
    return  this.http.post(environment.URL+this.url, JSON.stringify(resource));
  }

  update(resource){
    return  this.http.put(environment.URL+this.url, JSON.stringify(resource));
  }

  delete(id){
    return this.http.delete(environment.URL+this.url+'/'+id);
  }
}
