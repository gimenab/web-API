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

  constructor( private router:Router) { }

  ngOnInit(): void {
    this.pages=[{page:'',name:'Inicio'},{page:'products',name:'Productos'},{page:'companies',name:'Empresas'}];
    this.userSelected={selected:'Cliente',notSelected:'Administrador'};

  }

  onClick(){
    if(this.userSelected.selected=='Administrador'){
      this.pages=[{page:'',name:'Inicio'},{page:'products',name:'Productos'},{page:'companies',name:'Empresas'}];
      this.userSelected={selected:'Cliente',notSelected:'administrador'};
      console.log(this.pages,this.userSelected)
      this.router.navigate(['']);
      return;
    }

    if(this.userSelected.selected=='Cliente'){
      this.pages=[{page:'admin',name:'Inicio'},{page:'abmProducts',name:'Productos'},
      {page:'abmCompanies',name:'Empresas'},{page:'abmCategories',name:'Categorias'},
      {page:'abmCurrencies',name:'Monedas'}];
      this.userSelected={selected:'Administrador', notSelected:'Cliente'};
      console.log(this.pages,this.userSelected);
      this.router.navigate(['admin']);
      return;
    }
  }

}
