import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';
import { Companies } from 'src/app/models/companies';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Companies[];
  constructor(private companyService:CompanyService) {
  }

  ngOnInit(): void {
     this.companyService.getAll().subscribe(response=>{
      this.companies=<Companies[]>response;
       console.log(response);
     });
    // this.companies=[{ companyName:"comp 1", companyFoundationDate:"" ,   companyAddress: "", companyCity: "",
    // companyWebSite: "", companyEmail:"",companyDescription:"",companyPhone:"",companyLogo:'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'},
    // { companyName:"comp 2", companyFoundationDate:"" ,   companyAddress: "", companyCity: "",
    // companyWebSite: "", companyEmail:"",companyDescription:"",companyPhone:"",companyLogo:'https://static.wixstatic.com/media/3cf62a_8161bed1b36c493fa8722b46ae673e76~mv2.png/v1/fill/w_206,h_197,al_c,usm_0.66_1.00_0.01/LogoBIZUITSolo1024x1024-72dpi.png'},
    // { companyName:"comp 3", companyFoundationDate:"" ,   companyAddress: "", companyCity: "",
    // companyWebSite: "", companyEmail:"",companyDescription:"",companyPhone:"",companyLogo:'data:image/png;base64,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'},
    // { companyName:"comp 1", companyFoundationDate:"" ,   companyAddress: "", companyCity: "",
    // companyWebSite: "", companyEmail:"",companyDescription:"",companyPhone:"",companyLogo:""},
    // { companyName:"comp 2", companyFoundationDate:"" ,   companyAddress: "", companyCity: "",
    // companyWebSite: "", companyEmail:"",companyDescription:"",companyPhone:"",companyLogo:""},
    // { companyName:"comp 3", companyFoundationDate:"" ,   companyAddress: "", companyCity: "",
    // companyWebSite: "", companyEmail:"",companyDescription:"",companyPhone:"",companyLogo:""}];


}

}
