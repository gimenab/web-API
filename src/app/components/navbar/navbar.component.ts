import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pages:{page:string,name:string}[]=[{page:'',name:'Inicio'},{page:'products',name:'Productos'},{page:'company',name:'Empresas'}];
  userSelected={selected:'Cliente',notSelected:'Administrador'};

  constructor() { }

  ngOnInit(): void {

  }

  onClick(){
    if(this.userSelected.selected=='Administrador'){
      console.log("1");
      this.pages=[{page:'',name:'Inicio'},{page:'products',name:'Productos'},{page:'companies',name:'Empresas'}];
      this.userSelected={selected:'Cliente',notSelected:'administrador'}
      return;
    }
    if(this.userSelected.selected=='Cliente'){
      console.log("2");
      this.pages=[{page:'admin',name:'Inicio'}];
      this.userSelected={selected:'Administrador', notSelected:'Cliente'}
    }
  }

}
