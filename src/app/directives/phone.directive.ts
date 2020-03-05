import { Directive,  HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPhone]'
})
export class PhoneDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @HostListener('blur') onBlur(){
    let value:string = this.element.nativeElement.value;


    if (this.validation(value)){
      this.element.nativeElement.value= this.validation(value);
      this.renderer.removeStyle(this.element.nativeElement,"border");
      return;
    }
      this.element.nativeElement.style="border: 2px solid red;";
      this.element.nativeElement.value='';
      this.element.nativeElement.placeholder="Intentelo de nuevo";
      return;

  }

  validation(value){
    if(value.length==11){
      if(this.validate(value)){
        return  value.substr(0,4)+'-'+value.substr(4,3)+'-'+value.substr(7);
      }
    }
    if(value.length>11 && (value[4]=='-'&& value[8]=='-')){

      let aux = value.substr(0,4)+value.substr(5,3)+value.substr(9);
      if(this.validate(aux)){
        return  value;
      }
    }
    if(value.length>11 && value.length<15 ){
      if(this.validate(value)){
        return  value.substr(0,4)+'-'+value.substr(5,3)+'-'+value.substr(7);
      }
    }

    return false
  }

  validate(phone:number){
    if(phone>0){
      return true;
    }
      return false;
        }
}
