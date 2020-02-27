import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notImage'
})
export class NotImagePipe implements PipeTransform {

  transform(value: any): any {
    if (value = null) {
      return value= "https://image.shutterstock.com/image-vector/page-not-found-concept-404-260nw-764438536.jpg"
    }
    else{
      return null;
    }

  }

}
