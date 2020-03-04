import { Currency } from './../../models/Currency';
import { ProductCategories } from './../../models/ProductCategories';
import { CurrencyService } from './../../services/currency.service';
import { Companies } from './../../models/companies';
import { CompanyService } from './../../services/company.service';
import { CategoryService } from './../../services/category.service';
import { Categories } from './../../models/categories';
import { ProductsService } from './../../services/products.service';
import { Products } from './../../models/products';
import { Component, OnInit } from '@angular/core';
import { Message } from './../../models/Message';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-abmproducts',
  templateUrl: './abmproducts.component.html',
  styleUrls: ['./abmproducts.component.css']
})
export class ABMProductsComponent implements OnInit {

  product:Products= new Products();
  products:Products[];
  createUpdate:boolean=true;
  message:Message=new Message(Swal);
  categories:Categories[]=[];
  companies:Companies[]=[];
  CompaniesSelected:Companies[]=[];
  currencies:Currency[]=[];
  currency:Currency;

  constructor(private productsService:ProductsService, private categoryService:CategoryService,
              private companyService:CompanyService, private currencyService:CurrencyService) { }

  ngOnInit(): void {
    this.companyService.getAll().subscribe(response=>{
      this.companies=<Companies[]>response;
    })
  }

  getcode(id:number){
    this.currencyService.getId(id).subscribe(response=>{
      this.currency=<Currency>response;
    })
    return this.currency.currencyDescription;
  }

  getProducts(id:number){
    this.productsService.get('/Products/Companies/'+id).subscribe(resposne=>{
      this.products=<Products[]>resposne;
    })
  }
  categoryProduct(product:Products,categoryId:number){
    let prodCat:ProductCategories;
    prodCat.categoryId=categoryId;
    product.categoryID.push(prodCat)
  }

  add(product:Products){
    let prodCat:ProductCategories;
    product.categoryID.push(prodCat);
  }
  remove(product:Products,i:number){
    product.categoryID.splice(i,1);
  }

  create(){
    this.product=new Products();
    this.createUpdate=false;
    let prodCat:ProductCategories;
    this.product.categoryID.push(prodCat);
  }

  delete(id:number){
    this.message.success='delete';
    Swal.fire({
      title: '¿Esta seguro que desea eliminar?',
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
         this.productsService.delete(id).subscribe(response=>{
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
    let aux:Products;
    this.message.success="update";
    this.productsService.get('/Products/'+id).subscribe(response=>{
      aux=<Products>response;
      if(aux.productid==-1){
        this.message.alertError();
        return;
      }
      this.product=aux;
      this.createUpdate=true;
    })
  }

  submit(f){
    let aux:Products;

    if(this.product.productid==0){
      this.message.success='create';
      this.productsService.create(this.product).subscribe(response=>{
        aux=<Products>response;

        if(aux.productid>0){
          this.message.alertConfirm();
          this.product=new Products();
          this.createUpdate=true;
          return;
        }

        else{
          if(aux.productid==0){
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
      this.productsService.update(this.product).subscribe(response=>{
        aux=<Products>response;

        if(response=='ok'){
          this.message.alertConfirm();
          this.product=new Products();
          this.createUpdate=true;
          return;
        }

        else{
          if(response=='exists'){
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
