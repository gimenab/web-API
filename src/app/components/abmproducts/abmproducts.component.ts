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
import { Message2 } from '../../models/message2';
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
  message:Message2=new Message2(Swal);
  categories:Categories[]=[];
  companies:Companies[]=[];
  search:string;
  currencies:Currency[]=[];



  constructor(private productsService:ProductsService, private categoryService:CategoryService,
              private companyService:CompanyService, private currencyService:CurrencyService) {
               }

  ngOnInit(): void {
    this.companyService.getAll().subscribe(response=>{
      this.companies=<Companies[]>response;
    })
    this.currencyService.getAll().subscribe(response=>{
      this.currencies=<Currency[]>response;
    })
    this.categoryService.get('/Categories/children').subscribe(response=>{
      this.categories =<Categories[]>response;
    })
    this.searchProducts();
  }

  searchProducts(){
    if(!this.search){
      this.productsService.getAll().subscribe(response=>{
        this.products=<Products[]>response;
      })
    }else{
      this.productsService.get("/Products/search?orderBy=ProductName&value="+this.search).subscribe(response=>{
        if(!response){
        return this.search="";
        }
        this.products=<Products[]>response;
      })
    }
  }

  getcode(id:number){
    if(id==0){
      return "";
    }
    else{
      for(let i=0;this.currencies.length;i++){
        if(this.currencies[i].currencyId==id){
          return this.currencies[i].currencyCode;
        };
      }
    }
  }


  add(product:Products,selectedCategory){
    console.log(selectedCategory.value);
    this.categoryService.getId(selectedCategory.value).subscribe(response=>{
      let aux:Categories=<Categories>response;
    let prodCat:ProductCategories =new ProductCategories();
    prodCat.categoryId= aux.categoryId;
    prodCat.categoryName= aux.categoryName;
    product.categoryID.push(prodCat);
  })
  }


  remove(product:Products,i:number){
    product.categoryID.splice(i,1);
  }

  create(){
    this.product=new Products();
    this.createUpdate=false;
  }

  deleteProduct(id:number){
    this.createUpdate=true;
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
            this.searchProducts();
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


  update(product:Products){

    this.product=product;
    this.createUpdate=false;
  }

  submit(f){
    console.log(this.product);
    let aux:Products;
    if(this.product.productid==0){
      this.message.success='create';
      this.productsService.create(this.product).subscribe(response=>{
        aux=<Products>response;

        if(aux.productid>0){
          this.message.alertConfirm();
          this.searchProducts();
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
          this.searchProducts();
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
