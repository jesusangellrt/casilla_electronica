import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamic-component-host]',
})
export class DynamicComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}