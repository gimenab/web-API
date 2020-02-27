import { Companies } from './../../models/companies';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})

export class Card2Component implements OnInit {

  @Input() company:Companies;

  constructor() { }

  ngOnInit(): void {
  }

}
