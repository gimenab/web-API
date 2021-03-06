import { Categories } from './../../models/categories';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Message2 } from 'src/app/models/message2';
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
  message: Message2 = new Message2(Swal);
  createUpdate:boolean =true;
  search:string;


  constructor(private categoryService: CategoryService, private renderer:Renderer2) {

   }

   searchfather(id:number){
     if(id==0){
       return "";
     }
     else{
       for(let i=0;this.categoryFather.length;i++){
         if(this.categoryFather[i].categoryId==id){
           return this.categoryFather[i].categoryName;
         };
       }
     }
   }

  ngOnInit(): void {
    this.searchCategorie();
    this.categoryService.get('/Categories/father').subscribe( response => {
      this.categoryFather = <Categories[]>response;
    });
  }

  create() {
    this.searchCategorie();
    this.categoryService.get('/Categories/father').subscribe( response => {
      this.categoryFather = <Categories[]>response;
    });
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
            this.searchCategorie();
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
    this.categoryService.get('/Categories/father').subscribe( response => {
      this.categoryFather =<Categories[]>response;
    });
        let aux: Categories;
        this.message.success = 'update';
        this.categoryService.get( '/Categories/' + id ).subscribe (response => {
          aux =  response as Categories;
          if ( aux.categoryId == -1) {
            this.message.alertError();
            return;
          }
          this.category = aux;
          this.createUpdate = false;
         });

      }
  submit(f, name) {
     let aux: Categories;

     if (this.category.categoryId == 0) {
        this.message.success = 'create';
        this.categoryService.create(this.category).subscribe(response => {
       aux = response as Categories;
       if (aux.categoryId > 0) {
           this.message.alertConfirm();
           this.category = new Categories();
           this.createUpdate = true;
           this.searchCategorie();
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
    if (response=="ok") {
    this.message.alertConfirm();
    this.category = new Categories();
    this.createUpdate = true;
    this.searchCategorie();
    return;
    } else {
    if (response == "exists") {
    this.message.error = true;
    this.message.alertError();
    return;
    } else {
      this.message.alertError();
      return;
          }
        }
      });
    this.renderer.removeStyle(name.nativeElement,"border");
    }

  }
  searchCategorie(){
    if(!this.search){
      this.categoryService.getAll().subscribe(response=>{
        this.categories=<Categories[]>response;
      })
    }else{
      this.categoryService.get("/Categories/search?orderBy=CategoryName&value="+this.search).subscribe(response=>{
        if(!response){
          return this.search="";
        }
        this.categories=<Categories[]>response;
        console.log(this.categories);
      });
    }
    this.categoryService.get('/Categories/father').subscribe( response => {
      this.categoryFather =<Categories[]>response;
    });
  }


}



