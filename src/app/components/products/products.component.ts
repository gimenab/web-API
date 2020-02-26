import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[];
  constructor(private productService:ProductsService) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(response=>{
      this.products=<Products[]>response;
      console.log(response);
    });
  }

}
