
import {CanActivate} from "@angular/router";

export class LoginGuard implements CanActivate {

  canActivate() {

    let loggedIn: boolean = Math.random() < 0.5;

    if (!loggedIn) {
      console.log('user unlogined');
    }

    return loggedIn;
  }
}
