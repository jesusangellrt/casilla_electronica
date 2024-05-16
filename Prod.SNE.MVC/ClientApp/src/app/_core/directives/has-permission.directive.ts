import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from "@angular/core";
import {AuthService} from "../services/auth.service";

@Directive({
  selector: '[hasPermission]'
})
export class HasPermissionDirective implements OnInit {
  @Input("hasPermission") permisos: Array<string>;
  
  constructor(private _authService: AuthService,
              private viewContainer: ViewContainerRef,
              private templateRef: TemplateRef<any>) {
    
  }
  
  ngOnInit(): void {
    this.updateView();
  }

  private updateView() {
    if (this.checkPermission()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
  
  private checkPermission(): boolean {
    let hasPermission = this._authService.UserHasPermission(this.permisos);
    return hasPermission;
  }
  
}