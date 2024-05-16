import { Component, OnInit, Input } from '@angular/core';
import { environment } from '@cmp/environment';
import { AuthService } from "../../services";
@Component({
    selector: 'app-file-downloader-custom',
    template: `
        <button class="btn btn-secondary-custom btn-xs" type="button"
                role="button" tooltip=""
                title = "Descargar" 
                (click)="onClickDescargarArchivo()" 
                [disabled]="disabled">
            <i aria-hidden="true" class="fa fa-download"></i>
        </button>
    `
  })

  export class FileDownloaderCustomComponent implements OnInit {

    @Input() public codigo: string;
    @Input() public tooltip: string;

    rutaGA: string;
    disabled: boolean = false;
    version: number = 0;
    esBorrador: boolean = false;
    

    constructor(
      private _authService: AuthService,
    ) { }
  
    ngOnInit() {
      this.rutaGA= this._authService.GetConfig().Urls.URL_GA_UI;
    }
    onClickDescargarArchivo = () => {
      var url = `${this.rutaGA}/archivo/download?id=${this.codigo }&version=${this.version}&BuscarBorrador=${this.esBorrador}`;
      window.open(url, "_blank");
    }
  }