import { CurrencyService } from './../../services/currency.service';
import { Currency } from './../../models/Currency';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abmcurrency',
  templateUrl: './abmcurrency.component.html',
  styleUrls: ['./abmcurrency.component.css']
})
export class ABMCurrencyComponent implements OnInit {

  currency:Currency;
  currencies:Currency[];

  constructor(private currencyService:CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getAll().subscribe(response=>{
      this.currencies=<Currency[]>response;
    })
  }


  submit(f){

  }
}
