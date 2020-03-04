import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pages:{page:string,name:string}[];
  userSelected:{selected:string,notSelected:string};
  client:boolean;
  product:string;

  constructor( private router:Router) { }

  ngOnInit(): void {
    this.pages=[{page:'',name:'Inicio'},{page:'products',name:'Productos'},{page:'companies',name:'Empresas'}];
    this.userSelected={selected:'Cliente',notSelected:'Administrador'};
    this.client=true;
    this.router.navigate(['']);

  }

  onClick(){
    if(this.userSelected.selected=='Administrador'){
      this.pages=[{page:'',name:'Inicio'},{page:'products',name:'Productos'},{page:'companies',name:'Empresas'}];
      this.userSelected={selected:'Cliente',notSelected:'administrador'};
      this.client=true;
      this.router.navigate(['']);
      return;
    }

    if(this.userSelected.selected=='Cliente'){
      this.pages=[{page:'admin',name:'Inicio'},{page:'abmProducts',name:'Productos'},
      {page:'abmCompanies',name:'Empresas'},{page:'abmCategories',name:'Categorias'},
      {page:'abmCurrencies',name:'Monedas'}];
      this.userSelected={selected:'Administrador', notSelected:'Cliente'};
      this.client=false;
      this.router.navigate(['admin']);
      return;
    }
  }


  search(){
    if(!this.product){
      return;
    }
    let search:string=this.product;
    this.product='';
    this.router.navigate(['search',search]);


  }
}
