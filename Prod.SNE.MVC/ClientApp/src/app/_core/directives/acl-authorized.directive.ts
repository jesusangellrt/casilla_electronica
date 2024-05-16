import { Directive, OnInit, Input, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[AclAuthorized]'
})
export class AclAuthorizedDirective implements OnInit {

  @Input('AclAuthorized') codigo: any;
  @ViewChild('parentBody', {static: false}) private parentBody: ElementRef;
  

  constructor(
    private elementRef: ElementRef, 
    private renderer: Renderer2,
    private _authsService: AuthService
  ){
    //this.nativeElement = elementRef.nativeElement;
  }

  ngOnInit(): void {
      
    if (!this.authorized()) {
      this.elementRef.nativeElement.setEle = 'none';
      let el = this.elementRef.nativeElement;
      this.elementRef.nativeElement.remove();     
    }
  }
  ngOnDestroy() {
   
  }
    private authorized() {
        
    if(this.codigo == "0000") return true; 
    return this._authsService
      .GetConfig()
      .Procesos
      .filter(x => x == this.codigo).length > 0;
  }
}
