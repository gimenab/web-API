import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-client',
  templateUrl: './navbar-client.component.html',
  styleUrls: ['./navbar-client.component.css']
})
export class NavbarClientComponent implements OnInit {

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
