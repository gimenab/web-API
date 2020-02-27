import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';
import { Companies } from 'src/app/models/companies';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: Companies[];
  constructor(private companyService:CompanyService) {
  }

  ngOnInit(): void {
    this.companyService.getAll().subscribe(response=>{
      this.companies=<Companies[]>response;
      console.log(response);
    });
  }

}
