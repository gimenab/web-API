import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  client(){
    localStorage.setItem("admin",JSON.stringify(false));
    }

  admin(){
    localStorage.setItem("admin",JSON.stringify(true));
  }

}
