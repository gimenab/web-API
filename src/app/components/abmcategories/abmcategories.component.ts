import { CategoryService } from './../../services/category.service';
import { Categories } from './../../models/categories';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-abmcategories',
  templateUrl: './abmcategories.component.html',
  styleUrls: ['./abmcategories.component.css']
})
export class ABMCategoriesComponent implements OnInit {
  category:Categories = new Categories();
  categories:Categories[];
  categoryFather:Categories[];
  selectCategory = [{string : 'categoryName'}];



  constructor(private categoryService: CategoryService)
     {

   }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe( response =>{
      this.categories=<Categories[]>response;
    })
    this.categoryService.get('/api/Categories/father').subscribe( response =>{
      this.categoryFather=<Categories[]>response;
    })
  }
  create(){
    this.category=new Categories();
  }

  update(){

  }
  delete(){

  }

  submit(f){

  }
}
