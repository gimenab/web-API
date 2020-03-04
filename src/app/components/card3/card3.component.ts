import { Categories } from 'src/app/models/categories';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css']
})
export class Card3Component implements OnInit {


  @Input() category:Categories;
  constructor() { }

  ngOnInit(): void {
  }

}
