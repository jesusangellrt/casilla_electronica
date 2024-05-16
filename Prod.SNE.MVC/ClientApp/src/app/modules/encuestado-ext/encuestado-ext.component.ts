import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { PERMISOS, AuthService, ROLES } from "@cmp/core";
import { es_ES, NzI18nService } from 'ng-zorro-antd/i18n';
import { Router } from "@angular/router";
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-encuestado-ext',
  templateUrl: './encuestado-ext.component.html',
  styleUrls: ['./encuestado-ext.component.css']
})
export class EncuestadoExtComponent implements OnInit {
  _permisos = PERMISOS;
    
  rol_actual: any = {};
  ROLES = ROLES;
  constructor(
    private i18n: NzI18nService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private notification: NzNotificationService,
    private fb: FormBuilder,
    private _authService: AuthService,
    private modalService: NzModalService) 
    {
    this.i18n.setLocale(es_ES);
    
  }
  ngOnInit() {
    this.rol_actual = this._authService.GetCurrentRole();
    this.router.navigate(['/encuestado-ext/welcome']);
  }
}


