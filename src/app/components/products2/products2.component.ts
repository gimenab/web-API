
import { CategoryService } from './../../services/category.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { Categories } from 'src/app/models/categories';
@Component({
  selector: 'app-products2',
  templateUrl: './products2.component.html',
  styleUrls: ['./products2.component.css']
})
export class Products2Component implements OnInit {
  allProducts: Products[];
  products: Products[];
  categories: Categories[];
  subcategories: Categories[];
  showCategories: boolean= true;
  showSubcategories: boolean= false;
  showProducts: boolean= false;
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
    this.showCategories=false;
    this.showSubcategories=true;
  }
   getProducts(id:number){
    this.productService.get("api/Products/Categories/"+id).subscribe(response=>{
        this.products=<Products[]>response;
        console.log(response);
      });
    this.showSubcategories=false;
    this.showProducts=true;
  }

}
