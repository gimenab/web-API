import { CategoryService } from './../../services/category.service';
import { Categories } from './../../models/categories';
import { Component, OnInit } from '@angular/core';
import { Message } from './../../models/Message';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';


@Component({
  selector: 'app-abmcategories',
  templateUrl: './abmcategories.component.html',
  styleUrls: ['./abmcategories.component.css']
})
export class ABMCategoriesComponent implements OnInit {
  category: Categories = new Categories();
  categories: Categories[];
  categoryFather: Categories[];
  selectCategory = [{string : 'categoryName'}];
  message: Message = new Message(Swal);
  createUpdate: boolean;



  constructor(private categoryService: CategoryService) {

   }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe( response => {
      this.categories =  response as Categories[];
    });
    this.categoryService.get('/api/Categories/father').subscribe( response => {
      this.categoryFather =  response as Categories[];
    });
  }
  create() {
    this.category = new Categories();
    this.createUpdate = false;
  }


   delete(id: number) {
    this.message.success = 'delete';
    Swal.fire({
      title: '¿Esta seguro que desea eliminar?',
      text: 'Considere que al eliminar afectara los productos asociados a esta categoría',
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
         this.categoryService.delete(id).subscribe(response => {
           if ( response == 'ok') {
            this.message.alertConfirm();
          } else {
           if ( response == 'exists') {
              this.message.error = true;
              this.message.alertError();
            } else {
              this.message.alertError();
            }
          }
        });
      }
    });
  }
  update(id: number) {
        let aux: Categories;
        this.message.success = 'update';
        this.categoryService.get( 'api/Categories/' + id ).subscribe (response => {
          aux =  response as Categories;
          if ( aux.categoryId == -1) {
            this.message.alertError();
            return;
          }
          this.category = aux;
          this.createUpdate = true;
         });

      }
  submit(f) {
     let aux: Categories;

     if (this.category.categoryId == 0) {
        this.message.success = 'create';
        this.categoryService.create(this.category).subscribe(response => {
       aux = response as Categories;
       if (aux.categoryId > 0) {
           this.message.alertConfirm();
           this.category = new Categories();
           this.createUpdate = true;
           return;
         } else {
          if (aux.categoryId == 0) {
            this.message.error = true;
            this.message.alertError();
            return;
          } else {
          this.message.alertError();
          return;
          }
        }
      });
    } else {
    this.message.success = 'update';
    this.categoryService.update( this.category).subscribe ( response => {
    aux =  response as Categories;
    if (aux.categoryId > 0) {
    this.message.alertConfirm();
    this.category = new Categories();
    this.createUpdate = true;
    return;
    } else {
    if (aux.categoryId == 0) {
    this.message.error = true;
    this.message.alertError();
    return;
    } else {
      this.message.alertError();
      return;
          }
        }
      });
    }

  }


}




// import { CurrencyService } from './../../services/currency.service';
// import { Currency } from './../../models/Currency';
// import { Component, OnInit } from '@angular/core';
// import { Message } from './../../models/Message';
// import Swal from 'sweetalert2'
// import 'sweetalert2/src/sweetalert2.scss'

// @Component({
//   selector: 'app-abmcurrency',
//   templateUrl: './abmcurrency.component.html',
//   styleUrls: ['./abmcurrency.component.css']
// })
// export class ABMCurrencyComponent implements OnInit {

//   currency:Currency= new Currency();
//   currencies:Currency[];
//   createUpdate:boolean=true;
//   message:Message=new Message(Swal);

//   constructor(private currencyService:CurrencyService) { }

//   ngOnInit(): void {
//     this.currencyService.getAll().subscribe(response=>{
//       this.currencies=<Currency[]>response;
//     })
//   }

//   create(){
//     this.currency=new Currency();
//     this.createUpdate=false;
//   }

//   delete(id:number){
//     this.message.success='delete';
//     Swal.fire({
//       title: '¿Esta seguro que desea eliminar?',
//       text: "Considere que al eliminar afectara los productos que aun posean este tipo de moneda",
//       icon: 'warning',
//       showClass: {
//         popup: 'animated fadeInDown faster'
//       },
//       hideClass: {
//         popup: 'animated fadeOutUp faster'
//       },
//       showCancelButton: true,
//       cancelButtonText: 'Cancelar',
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Si, Estos seguro.'
//     }).then((result) => {
//       if (result.value) {
//          this.currencyService.delete(id).subscribe(response=>{
//            if(response=='ok'){
//             this.message.alertConfirm();
//           }else{
//            if(response=='exists'){
//               this.message.error=true;
//               this.message.alertError();
//             }else{
//               this.message.alertError();
//             }
//           }
//         })
//       }
//     })
//   }

//   Update(id:number){
//     let aux:Currency;
//     this.message.success="update";
//     this.currencyService.get('api/Currencies/'+id).subscribe(response=>{
//       aux=<Currency>response;
//       if(aux.currencyId==-1){
//         this.message.alertError();
//         return;
//       }
//       this.currency=aux;
//       this.createUpdate=true;
//     })
//   }

//   submit(f){
//     let aux:Currency;

//     if(this.currency.currencyId==0){
//       this.message.success='create';
//       this.currencyService.create(this.currency).subscribe(response=>{
//         aux=<Currency>response;

//         if(aux.currencyId>0){
//           this.message.alertConfirm();
//           this.currency=new Currency();
//           this.createUpdate=true;
//           return;
//         }

//         else{
//           if(aux.currencyId==0){
//             this.message.error=true;
//             this.message.alertError();
//             return;
//           }else{
//             this.message.alertError();
//             return;
//           }
//         }
//       })
//     }


//     else{
//       this.message.success='update';
//       this.currencyService.update(this.currency).subscribe(response=>{
//         aux=<Currency>response;

//         if(aux.currencyId>0){
//           this.message.alertConfirm();
//           this.currency=new Currency();
//           this.createUpdate=true;
//           return;
//         }

//         else{
//           if(aux.currencyId==0){
//             this.message.error=true;
//             this.message.alertError();
//             return;
//           }else{
//             this.message.alertError();
//             return;
//           }
//         }
//       })
//     }

//   }


// }
