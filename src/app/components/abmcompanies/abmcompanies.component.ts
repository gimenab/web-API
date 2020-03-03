import { Companies } from 'src/app/models/companies';
import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';
import { Message } from './../../models/Message';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-abmcompanies',
  templateUrl: './abmcompanies.component.html',
  styleUrls: ['./abmcompanies.component.css']
})
export class ABMCompaniesComponent implements OnInit {

  company:Companies= new Companies();
  companies:Companies[];
  createUpdate:boolean=true;
  message:Message=new Message(Swal);

  constructor(private companyService:CompanyService) { }

  ngOnInit(): void {
    this.companyService.getAll().subscribe(response=>{
      this.companies=<Companies[]>response;
    })
  }

  create(){
    this.company=new Companies();
    this.createUpdate=false;
  }

  delete(id:number){
    this.message.success='delete';
    Swal.fire({
      title: '¿Esta seguro que desea eliminar?',
      text: "Considere que al eliminar afectara los productos que aun posean este tipo de moneda",
      icon: 'warning',
      showClass: {
        popup: 'animated fadeInDown faster'
      },
      hideClass: {
        popup: 'animated fadeOutUp faster'
      },
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Estos seguro.'
    }).then((result) => {
      if (result.value) {
         this.companyService.delete(id).subscribe(response=>{
           if(response=='ok'){
            this.message.alertConfirm();
          }else{
           if(response=='exists'){
              this.message.error=true;
              this.message.alertError();
            }else{
              this.message.alertError();
            }
          }
        })
      }
    })
  }

  Update(id:number){
    let aux:Companies;
    this.message.success="update";
    this.companyService.get('api/Companies/'+id).subscribe(response=>{
      aux=<Companies>response;
      if(aux.companyId==-1){
        this.message.alertError();
        return;
      }
      this.company=aux;
      this.createUpdate=false;
    })
  }

  submit(f){
    let aux:Companies;

    if(this.company.companyId==0){
      this.message.success='create';
      console.log(this.company);

      this.companyService.create(this.company).subscribe(response=>{
        aux=<Companies>response;

        if(aux.companyId>0){
          this.message.alertConfirm();
          this.company=new Companies();
          this.createUpdate=true;
          return;
        }

        else{
          if(aux.companyId==0){
            this.message.error=true;
            this.message.alertError();
            return;
          }else{
            this.message.alertError();
            return;
          }
        }
      })
    }


    else{
      this.message.success='update';
      this.companyService.update(this.company).subscribe(response=>{

        if(response=="ok"){
          this.message.alertConfirm();
          this.company=new Companies();
          this.createUpdate=true;
          return;
        }

        else{
          if(response=="exists"){
            this.message.error=true;
            this.message.alertError();
            return;
          }else{
            this.message.alertError();
            return;
          }
        }
      })
    }

  }


}

