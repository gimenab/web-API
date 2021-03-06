import { CurrencyService } from './../../services/currency.service';
import { Currency } from 'src/app/models/Currency';
import { Component, OnInit,ElementRef, Renderer2 } from '@angular/core';
import { Message2 } from 'src/app/models/message2';
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
  message:Message2=new Message2(Swal);
  search:string;

  constructor(private currencyService:CurrencyService, private renderer:Renderer2) { }

  ngOnInit(): void {
   this.searchCurrency();
  }

  create(){
    this.currency=new Currency();
    this.createUpdate=false;
  }

  searchCurrency(){
    if(!this.search){
      this.currencyService.getAll().subscribe(response=>{
        this.currencies=<Currency[]>response;
      })
    }else{
      this.currencyService.get("/Currencies/search?orderBy=CurrencyDescription&value="+this.search).subscribe(response=>{

        if(!response){
          return this.search="";
          }
          this.currencies=<Currency[]>response;

      })
    }
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
            this.searchCurrency();
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

  submit(f, code){
    let aux:Currency;
    console.log(this.currency);
    if(this.currency.currencyId==0){
      this.message.success='create';
      this.currencyService.create(this.currency).subscribe(response=>{
        aux=<Currency>response;

        if(aux.currencyId>0){
          this.message.alertConfirm();
          this.currency=new Currency();
          this.createUpdate=true;
          this.searchCurrency();
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
          this.searchCurrency();
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
    this.renderer.removeStyle(code.nativeElement,"border");

  }


}
