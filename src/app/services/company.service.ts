import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CompanyService extends DataService {

  constructor(http: HttpClient) {
    super(http,'http://localhost:44331/api/Companies');
   }
}
