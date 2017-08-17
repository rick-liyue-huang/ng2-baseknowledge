
#### angular form

##### the original form in html

```
<form action="/regist" method="post">
  <div>username: <input type="text" required pattern="[a-zA-Z0-9]+"></div>
  <div>phone: <input type="text"></div>
  <div>postcode: <input type="number" min="2000" max="8888"></div>
  <div>password: <input type="password"></div>
  <div>confirm password: <input type="password"></div>
  <button type="submit ">register</button>
</form>

```

the form should have some rules:
1. each input has the independent check rules.
2. if user type wrong, it will show the error message.
3. it should check some relative inputs together, such as password and confirm password
4. it should have some methods used to deal with the input typing before submit to server.
5. it should confirm how to deal with the transmission way.

so we will use angular form.


angular form will arrange the 'ngForm' property to form, and will get all input values with 'ngModel'.

the following one is angular template form
 
```
<form #myForm="ngForm" (ngSubmit)="createUser(myForm.value)">
  <div>username: <input #myNickName="ngModel" ngModel name="nickname" type="text" required pattern="[a-zA-Z0-9]+"></div>
  <div>phone: <input ngModel name="phone" type="text"></div>
  <div>postcode: <input ngModel name="postcode" type="number" min="2000" max="8888"></div>
  <div>email: <input ngModel name="email" type="password"></div>
  
  <div ngModelGroup="passwordInfo">
    <div>password: <input ngModel name="password" type="password"></div>
    <div>confirm password: <input ngModel name="confirm password" type="password"></div>
  </div>

  <button type="submit ">register</button>
</form>


{{myForm.value | json}}


<div>
  nickname value is: {{myNickName.value}}
</div>
```


the following code is about angular reactive form

in 'reactive-form.component.html'
```
private formModel: FormGroup;

  // private xxx: FormControl;

  constructor() {

    this.formModel = new FormGroup({  // it contains the fixed elements
      nickname: new FormControl(), // it means one data of form
      mobile: new FormControl(),
      emails: new FormArray([   // it contains the changeable elements, and no "key"
        new FormControl()
      ]),

      passwordInfo: new FormGroup({
        password: new FormControl(),
        passwordConfirm: new FormControl()
      })
    });
  }

  addEmail() {
    let emails = this.formModel.get('emails') as FormArray; // transfer to FormArray type
    emails.push(new FormControl());
    console.log(this.formModel.value);
  }

  createUser() {
    console.log(this.formModel.value);
  }
```

and in 'reactive-form.component.ts'

```
<form [formGroup]="formModel" (submit)="createUser()">

  <div>Nickname: <input type="text" formControlName="nickname" pattern="[a-z]"></div>

  <div> Emails:
    <ul formArrayName="emails">
      <li *ngFor="let email of formModel.get('emails').controls; let i = index">
        <input type="email" [formControlName]="i">
      </li>
    </ul>
    <button type="button" (click)="addEmail()">Add Email</button>
  </div>

  <div>Mobile: <input type="number" formControlName="mobile"></div>

  <div formGroupName="passwordInfo">
    <div>Password: <input type="password" formControlName="password"></div>
    <div>Confirm password: <input type="password" formControlName="passwordConfirm"></div>
  </div>

  <button type="submit">Register</button>
</form>
```


we also can rebuild it by 'form'

```
private formbuilder: FormBuilder = new FormBuilder();

  // private xxx: FormControl;

  constructor() {

    // this.formModel = new FormGroup({  // it contains the fixed elements
      this.formModel = this.formbuilder.group({
      nickname: [''], // it means one data of form
      mobile: [''],
      emails: this.formbuilder.array([   // it contains the changeable elements, and no "key"
         ['']
      ]),

      passwordInfo: this.formbuilder.group ({
        password: [''],
        passwordConfirm: ['']
      })
    });
  }

```


at last, match the 'template form' and 'reactived form'.

both form can extract the validator methods.

and the template form need the directives to do more thing.





































































