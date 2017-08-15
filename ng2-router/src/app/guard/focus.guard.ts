
//before jumping this component to other component, will deal with somedata in this component

import {CanDeactivate} from "@angular/router";
import {StockComponent} from "../stock/stock.component";

export class FocusGuard implements CanDeactivate<StockComponent> {

  canDeactivate (component: StockComponent) {

    if (component.isFocus()) {
      return true;
    } else {
      return window.confirm("will leave this stock");
    }

  }
}
