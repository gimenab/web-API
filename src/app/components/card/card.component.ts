import { Products } from './../../models/products';
import { Component, OnInit, Input } from '@angular/core';
import { Categories } from 'src/app/models/categories';
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() product:Products;

  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
  }

}
