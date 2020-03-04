import { Products } from 'src/app/models/products';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  products:Products[]=[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(response=>{
      this.products=<Products[]>response;
    })
  }

}
