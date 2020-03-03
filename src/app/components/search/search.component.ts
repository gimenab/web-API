import { Products } from 'src/app/models/products';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route:ActivatedRoute, private productsService:ProductsService) { }

  productSearch:string;
  products:Products[]=[];

  ngOnInit(): void {
    this.route.paramMap.subscribe(response=>{
      this.productSearch=response["params"]["search"];
      this.search();
    })
  }

  search(){
    this.productsService.get('api/Products/search?orderBy=ProductName&value='+ this.productSearch)
        .subscribe(response=>{
          this.products=<Products[]>response;
        })
  }
}
