import { Currency } from './../../models/Currency';
import { CurrencyService } from './../../services/currency.service';
import { CompanyService } from './../../services/company.service';
import { Products } from './../../models/products';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Companies } from 'src/app/models/companies';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route:ActivatedRoute, private productsService:ProductsService,
    private companyService:CompanyService, private currencyService:CurrencyService) { }

  productSearch:string;
  products:Products[]=[];
  product:Products=null;
  company:Companies=null;
  currency:Currency=null;
  selected:boolean=true;

  ngOnInit(): void {
    this.route.paramMap.subscribe(response=>{
      this.productSearch=response["params"]["search"];
      this.search();
    })
  }

  search(){
    this.productsService.get('/Products/search2?orderBy=ProductName&value='+ this.productSearch)
        .subscribe(response=>{
          this.products=<Products[]>response;
        })
  }

  onClick(product:Products){
    this.companyService.getId(product.companyId).subscribe(response=>{
      this.company=<Companies>response;
      console.log(response);
    });
    this.currencyService.getId(product.currencyId).subscribe(response=>{
      this.currency=<Currency>response;
    });
    this.product=product;
    this.selected=false;
  }

  back(){
    this.product=null;
    this.selected=true;

  }
}
