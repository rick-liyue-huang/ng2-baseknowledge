import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
/**
 * Created by zhailiang on 2017/7/3.
 */

export function mobileValidator(mobile: FormControl):any {
  let value = (mobile.value || '') + '';
  var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid = myreg.test(value);
  console.log('mobile passed validating:'+valid);
  return valid ? null : {mobile:true};
}

export function mobileAsyncValidator(mobile: FormControl):any {
  let value = (mobile.value || '') + '';
  var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid = myreg.test(value);
  console.log('mobile passed validating:'+valid);
  return Observable.of(valid ? null : {mobile:true}).delay(5000);
}

export function passwordValidator(info: FormGroup):any {
  let password:FormControl = info.get('password') as FormControl;
  let pConfirm:FormControl = info.get('passwordConfirm') as FormControl;
  if(password != null && pConfirm != null) {
    let valid:boolean = password.value === pConfirm.value;
    console.log('password passed validating:'+valid);
    return valid ? null : {password: {description:'two passwords cannot match'}};
  }
  return null;
}
