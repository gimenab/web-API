import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-api';
  admin:boolean;

  constructor(){
    if(!localStorage.getItem("admin")){
      this.admin=false;
      localStorage.setItem("admin",JSON.stringify(this.admin));
    }else{
      this.admin=JSON.parse(localStorage.getItem("admin"));
    }
  }


}
