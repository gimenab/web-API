

export  class  Message {
  private Swal;
  public success:'delete'|'update'|'create';
  private response:{title:string, message:string};
  public	error:boolean=false;

  constructor(Swal){
    this.Swal=Swal;
  }

  public alertError (){
    this.messageError();
    this.Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: this.response.message,
      showClass: {
        popup: 'animated fadeInDown faster'
      },
      hideClass: {
        popup: 'animated fadeOutUp faster'
      },
      showConfirmButton: false,
      timer: 1500
    })
  }

  public alertConfirm (){
    this.messageConfirm();
    this.Swal.fire({
      icon:'success',
      title:this.response.title,
      text:this.response.message,
      showClass: {
        popup: 'animated fadeInDown faster'
      },
      hideClass: {
        popup: 'animated fadeOutUp faster'
      },
      showConfirmButton: false,
      timer: 1500
    })
  }

  private messageConfirm(){
    switch(this.success)
    {
     case 'delete':
       this.response={title:'Eliminado!',message:'Se eliminó con éxito.'};
       break;
     case 'update':
       this.response={title:'Actualizado!',message:'Se a creado con extio.'};
       break;
     case 'create':
       this.response={title:'Creado!',message:'Se creó con éxito.'};
       break;
    }
  }
  private messageError(){
    if(this.error){
      switch(this.success)
      {
       case 'delete':
        this.response={title:'',message:'Ya fue eliminado.'};
         break;
       case 'update':
         this.response={title:'',message:'Ya existe uno igual.'};
         break;
       case 'create':
        this.response={title:'',message:'Ya existe uno igual.'};
         break;
      }
    }else{
      switch(this.success)
      {
      case 'delete':
        this.response={title:'',message:'Ocurrió un error al querer eliminar, inténtelo de nuevo más tarde.'};
        break;
      case 'update':
        this.response={title:'',message:'Ocurrió un error al querer actualizar, inténtelo de nuevo más tarde.'};
        break;
      case 'create':
        this.response={title:'',message:'Ocurrió un error al querer crear, inténtelo de nuevo más tarde.'};
        break;
      }
    }
  }
}
