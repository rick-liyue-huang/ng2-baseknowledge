

// when jump to another component, will deal with some data.

import {CanActivate} from "@angular/router";

export class PermissionGuard implements CanActivate {
  canActivate() {

    var hasPermission: boolean = Math.random() < 0.5;

    if (!hasPermission) {
      console.log("costomer has no right to check this stock info")
    }
    return hasPermission;
  }
}


