import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get('https://localhost:44331/api/Products');
    return this.http.get('https://localhost:44331/api/Companies');
  }
  getAll2() {
    return this.http.get('https://localhost:44331/api/Companies');
  }
}
