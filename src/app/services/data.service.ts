import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
export class DataService {
  constructor(private http: HttpClient,private url:string) {

  }

  getAll(){
    return this.http.get(this.url);
  }
  get(url:string){
    return this.http.get('http://localhost:44331/'+url);
  }
  create(resource){
    return  this.http.post(this.url, JSON.stringify(resource));
  }

  update(resource){
    return  this.http.put(this.url, JSON.stringify(resource));
  }

  delete(id){
    return this.http.delete(this.url+'/'+id);
  }
}
