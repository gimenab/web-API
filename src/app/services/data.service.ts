import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
export class DataService {
  constructor(private http: HttpClient,private url:string) {

  }

  getAll(){
    return this.http.get('https://localhost:44331/'+this.url);
  }
  get(url:string){
    return this.http.get('https://localhost:44331/'+url);
  }
   getId(id:number){
    return this.http.get('https://localhost:44331/'+this.url+id)
  }
  create(resource){
    return  this.http.post('https://localhost:44331/'+this.url, JSON.stringify(resource));
  }

  update(resource){
    return  this.http.put('https://localhost:44331/'+this.url, JSON.stringify(resource));
  }

  delete(id){
    return this.http.delete('https://localhost:44331/'+this.url+'/'+id);
  }
}
