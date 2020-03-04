import { CurrencyService } from './../../services/currency.service';
import { Currency } from './../../models/Currency';
import { Component, OnInit } from '@angular/core';
import { Message } from './../../models/Message';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-abmcurrency',
  templateUrl: './abmcurrency.component.html',
  styleUrls: ['./abmcurrency.component.css']
})
export class ABMCurrencyComponent implements OnInit {

  currency:Currency= new Currency();
  currencies:Currency[];
  createUpdate:boolean=true;
  message:Message=new Message(Swal);

  constructor(private currencyService:CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getAll().subscribe(response=>{
      this.currencies=<Currency[]>response;
    })
  }

  create(){
    this.currency=new Currency();
    this.createUpdate=false;
  }

  delete(id:number){
    this.message.success='delete';
    Swal.fire({
      title: '¿Esta seguro que desea eliminar?',
      text: "Considere que al eliminar afectara los productos que aun posean este tipo de moneda",
      icon: 'warning',
      showClass: {
        popup: 'animated fadeInDown faster'
      },
      hideClass: {
        popup: 'animated fadeOutUp faster'
      },
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Estos seguro.'
    }).then((result) => {
      if (result.value) {
         this.currencyService.delete(id).subscribe(response=>{
           if(response=='ok'){
            this.message.alertConfirm();
          }else{
           if(response=='exists'){
              this.message.error=true;
              this.message.alertError();
            }else{
              this.message.alertError();
            }
          }
        })
      }
    })
  }

  Update(id:number){
    let aux:Currency;
    this.message.success="update";
    this.currencyService.get('/Currencies/'+id).subscribe(response=>{
      aux=<Currency>response;
      if(aux.currencyId==-1){
        this.message.alertError();
        return;
      }
      this.currency=aux;
      this.createUpdate=false;
    })
  }

  submit(f){
    let aux:Currency;

    if(this.currency.currencyId==0){
      this.message.success='create';
      this.currencyService.create(this.currency).subscribe(response=>{
        aux=<Currency>response;

        if(aux.currencyId>0){
          this.message.alertConfirm();
          this.currency=new Currency();
          this.createUpdate=true;
          return;
        }

        else{
          if(aux.currencyId==0){
            this.message.error=true;
            this.message.alertError();
            return;
          }else{
            this.message.alertError();
            return;
          }
        }
      })
    }


    else{
      this.message.success='update';
      this.currencyService.update(this.currency).subscribe(response=>{
        aux=<Currency>response;

        if(response=="ok"){

          this.message.alertConfirm();
          this.currency=new Currency();
          this.createUpdate=true;
          return;
        }

        else{

          if(response=="exists"){

            this.message.error=true;
            this.message.alertError();
            return;
          }else{
            this.message.alertError();
            return;
          }
        }
      })
    }

  }


}
