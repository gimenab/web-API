import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  // imageUrl = 'https://cdn131.picsart.com/284432217032211.png?type=webp&to=min&r=640';
  imageUrl='https://blog.najmanowicz.com/wp-content/uploads/2015/04/boxy_robot_searching_400_clr_14606.png';


  constructor(private router:Router) {

   }
  click()
  {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
