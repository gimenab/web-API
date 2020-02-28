import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  imageUrl = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dead-robot-on-back-royalty-free-image-1574095935.jpg?resize=768:*';


  constructor(private router:Router) {

   }
  click()
  {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
