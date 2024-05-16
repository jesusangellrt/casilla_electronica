import { NgModule } from '@angular/core';
import { AclAuthorizedDirective } from './acl-authorized.directive';
import { DynamicComponentDirective } from './dynamic-component.directive';
import { HasPermissionDirective } from "./has-permission.directive";
import { HasRoleDirective } from "./has-role.directive";

@NgModule({
  imports: [
  ],
  declarations: [
    AclAuthorizedDirective,
    DynamicComponentDirective,
    HasPermissionDirective,
    HasRoleDirective
  ],
  exports: [
    AclAuthorizedDirective,
    DynamicComponentDirective,
    HasPermissionDirective,
    HasRoleDirective
  ]
})
export class CoreDirectivesModule { }
