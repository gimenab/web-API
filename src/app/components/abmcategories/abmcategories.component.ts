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


  constructor(private categoryService: CategoryService)
     {

   }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe( response =>{
      this.categories=<Categories[]>response;
    })
  }
  submit(f){

  }
}
