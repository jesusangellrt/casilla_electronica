import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CATEGORIA, CategoriaService, CATEGORIA_EXTRANET } from '@app/_core';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-save-update-categoria-ext',
  templateUrl: './save-update-categoria-ext.component.html',
  styleUrls: ['./save-update-categoria-ext.component.css']
})
export class SaveUpdateCategoriaExtComponent implements OnInit {

  @Input() allow_edit:boolean=true;
  @Input() categoria:CATEGORIA_EXTRANET;
  @Input() isVisibleModal:boolean=false;
  @Input() title:string=null;
  @Output() onCloseForm: EventEmitter<boolean>=new EventEmitter();

  cargando_tabla:boolean=true;
  array_sub_categorias_extranet=[];
  sub_categoria_name:string=null;
  frmPRG={
    frmNombre: new FormControl(null,Validators.required),
  }
  frmSubCategorias:FormControl[]=[];
  all_sub_categorias=[];
  constructor(
    private notification: NzNotificationService,
    private spinner: NgxSpinnerService,
    private modal: NzModalService,
    private categoria_s:CategoriaService
  ) { }

  ngOnInit() {
    this.all_sub_categorias=this.categoria.array_sub_categorias_extranet.filter(x=>x.es_eliminado==false);
    this.set_list();
  }

  clean_search=()=>{
    this.sub_categoria_name=null;
  }
  set_list=()=>{
    let search = this.sub_categoria_name;
    this.frmSubCategorias=[];
    let array:any = search?this.all_sub_categorias.filter(x => x.nombre.toLowerCase().indexOf(search) > -1):this.all_sub_categorias;
    array.filter((x,index)=>{
      x.nro=index+1;
      this.frmSubCategorias.push(new FormControl(x.nombre,Validators.required));
    })
    this.array_sub_categorias_extranet=array;
    this.cargando_tabla=false;
  }
  _add_sub_categoria(){
    let new_item={
      id_sub_categoria_extranet:0,
      id_categoria_extranet: this.categoria.id_categoria_extranet?this.categoria.id_categoria_extranet:0,
      nombre: null,
      es_eliminado:false
    };
    this.cargando_tabla=true;
    let array=this.array_sub_categorias_extranet;
    array.push(new_item);

    this.array_sub_categorias_extranet=[];
    let _frmSubCategorias=[];
    setTimeout(()=>{
      array.filter((x,index)=>{
        x.nro=index+1;
        _frmSubCategorias.push(new FormControl(x.nombre,Validators.required));
      })
      this.frmSubCategorias=_frmSubCategorias;
      this.array_sub_categorias_extranet=array;
      this.cargando_tabla=false;
    },200);

  }
  _delete_sub_categoria=(idx)=>{
    this.cargando_tabla=true;
    let array=this.array_sub_categorias_extranet;
    array.splice(idx,1);
    this.array_sub_categorias_extranet=[];
    let _frmSubCategorias=[];
    setTimeout(()=>{
      array.filter((x,index)=>{
        x.nro=index+1;
        _frmSubCategorias.push(new FormControl(x.nombre,Validators.required));
      })
      this.frmSubCategorias=_frmSubCategorias;
      this.array_sub_categorias_extranet=array;
      this.cargando_tabla=false;
    },200);
  }

  handleSaveFormularioModal=()=>{
    if(this.frmPRG.frmNombre.valid){
      if(this.array_sub_categorias_extranet.filter(x=>x.nombre==null||x.nombre=='').length==0){
        this.spinner.show();
        let filter = {...this.categoria};
        filter.array_sub_categorias_extranet = this.array_sub_categorias_extranet.map(m=>{return { 
          id_sub_categoria_extranet:m.id_sub_categoria_extranet,
          id_categoria_extranet: m.id_categoria_extranet,
          nombre: m.nombre,
          es_eliminado: m.es_eliminado
         }}); 
    
         this.categoria_s._SaveUpdateCategoriasExtranet(filter)
          .then((datos) => {
            if(datos.data){
              if(datos.data.Success){
                let str='<ul>';
                datos.data.Messages.forEach(message => {
                  str+=`<li>${message}</li>`;
                });
                str+='</ul>';
                this.createNotification('success','Éxito',str);
                this.onCloseForm.emit(true);
                this.isVisibleModal=false;

              }else{
                let str='<ul>';
                datos.data.Messages.forEach(message => {
                  str+=`<li>${message}</li>`;
                });
                str+='</ul>';
                this.createNotification('warning','Advertencia',str);
              }
              this.spinner.hide();
            }
          })
          .catch(() => {
            this.cargando_tabla = false;
          });
    
      }else{
        this.createNotification('warning','Advertencia','El nombre de las subcategorías es obligatorio');
      }
    }else{
      this.frmPRG.frmNombre.markAllAsTouched();
      this.frmPRG.frmNombre.markAsDirty();
      this.createNotification('warning','Advertencia','El nombre de la categoría es obligatorio.');
    }
  }
  handleCancelarFormularioModal=()=>{
    this.onCloseForm.emit(false);
    this.isVisibleModal=false;
  }



  
  createNotification = (type: string, title: string, message: string): void => {
    this.notification.create(
      type,
      title,
      message
    );
  };
}
