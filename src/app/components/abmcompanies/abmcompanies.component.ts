import { CompanyService } from './../../services/company.service';
import { Companies } from './../../models/companies';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abmcompanies',
  templateUrl: './abmcompanies.component.html',
  styleUrls: ['./abmcompanies.component.css']
})
export class ABMCompaniesComponent implements OnInit {


  company: Companies;
  companies: Companies[];

  constructor(private companyService:CompanyService) { }

  ngOnInit(): void {
    this.companyService.getAll().subscribe(response=>{
      this.companies=<Companies[]>response;
    })
  }


  submit(f){

  }
}


