
import { CategoryService } from './../../services/category.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { Categories } from 'src/app/models/categories';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts: Products[];
  products: Products[];
  categories: Categories[];
  subcategories: Categories[];
  selected: boolean= false;
  // subcategories:
  constructor(private productService:ProductsService, private categoriesService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoriesService.get('api/Categories/father').subscribe(response=>{
      this.categories=<Categories[]>response;
    });
    this.productService.get("api/Products").subscribe(response=>{
      this.allProducts=<Products[]>response;
    });
  }
   getSubcategories(id:number){
    this.categoriesService.get('api/Categories/father/'+id).subscribe(response=>{
      this.subcategories=<Categories[]>response;
    });
  }
   getProducts(id:number){
    console.log(id);
    this.selected=true;
    this.productService.get("api/Products/Categories/"+id).subscribe(response=>{
        this.products=<Products[]>response;
        console.log(response);
      });
  }

}
