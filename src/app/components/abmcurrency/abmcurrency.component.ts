import { CurrencyService } from './../../services/currency.service';
import { Currency } from './../../models/Currency';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-abmcurrency',
  templateUrl: './abmcurrency.component.html',
  styleUrls: ['./abmcurrency.component.css']
})
export class ABMCurrencyComponent implements OnInit {

  currency:Currency= new Currency();
  currencies:Currency[];

  constructor(private currencyService:CurrencyService) { }

  ngOnInit(): void {
    // this.currencyService.getAll().subscribe(response=>{
    //   this.currencies=<Currency[]>response;
    // })
  }

  delete(id:number){
    Swal.fire({
      title: '¿Esta seguro que desae eliminar?',text:'Concidere que al eliminar afectara los productos que aun lo posean',
      showClass: {
        popup: 'animated fadeInDown faster'
      },
      hideClass: {
        popup: 'animated fadeOutUp faster'
      },
      icon: 'warning',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      showCancelButton: true,
      showCloseButton: true
    })
  }

  submit(f){
    Swal.fire({
      icon: 'success',
      title: 'Se realizo la carga',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
