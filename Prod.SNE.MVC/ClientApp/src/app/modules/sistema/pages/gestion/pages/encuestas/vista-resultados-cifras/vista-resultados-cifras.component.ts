import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, EncuestaData, EncuestasService, FileService } from '@app/_core';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-vista-resultados-cifras',
  templateUrl: './vista-resultados-cifras.component.html',
  styleUrls: ['./vista-resultados-cifras.component.css']
})
export class VistaResultadosCifrasComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private  ref_change : ChangeDetectorRef,
    private _formBuilder: FormBuilder,
    private router: Router,
    private encuesta_s:EncuestasService,
    private spinner: NgxSpinnerService,
    private _fileService: FileService,
    private _authService: AuthService,
    private sanitizer: DomSanitizer,
  ) { 
    this._fileService.rutaBase = this._authService.GetConfig().Urls.URL_GA_UI;
  }

  id_encuesta:number=0;
  b64_pdf_file_completo=null;
  b64_pdf_file_encuestado=null;
  main_loaded=false;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
			if (id && Number(id) > 0) {
        this.id_encuesta = Number(id);
        //encuesta_data
        this.spinner.show();
        this.encuesta_s._getEncuestaDataByID(Number(id)).then(async datos => {
          let dt = datos.data.encuesta;
          this.b64_pdf_file_completo=await this.onGetSavedFileByCodeWithReturn(dt.pdf_completo,1);
          this.b64_pdf_file_encuestado=await this.onGetSavedFileByCodeWithReturn(dt.pdf_encuestado,2);
          this.main_loaded=true;
          this.spinner.hide();
          this.ref_change.detectChanges();
          this.ref_change.markForCheck();
        }).catch(err => {});
      }
    });
  }

  has_file_completo=false;
  has_file_encuestado=false;
  onGetSavedFileByCodeWithReturn = async (codigo: string, tipo) =>{
    let ur_file=null,has_file=false;
    await this._fileService.getFilesById(codigo).then(resp => {
        if (resp.Success && resp.Data && resp.Data[0].content!=null){
          var binary = atob(resp.Data[0].content.replace(/\s/g, ''));
          var len = binary.length;
          var buffer = new ArrayBuffer(len);
          var view = new Uint8Array(buffer);
          for (var i = 0; i < len; i++) {
              view[i] = binary.charCodeAt(i);
          }
          let contentType =resp.Data[0].contentType;
          //var blob = new Blob([view], { type: contentType });
          ur_file = 'data:'+contentType+';base64,'+resp.Data[0].content;
          if(tipo==1){this.has_file_completo=true;} else{this.has_file_encuestado=true;}
          has_file=true;
        }else{
          has_file=false;
          if(tipo==1){this.has_file_completo=false;} else{this.has_file_encuestado=false;}
        }
    });
    //return ur_file;
    return has_file?this.sanitizer.bypassSecurityTrustResourceUrl(ur_file):null;
  }
  


}
