

### view life

1. 'afterviewinit' is called before 'afterviewchecked', and both called after the view make

2. the two methods in child components called before the ones in their parent component.

3. In these two methods, do not change the binded property values, if have to do that, we can use setTimeout method


```
ngAfterViewInit() {

    console.log('parent component view initial finished');
    setTimeout(() => {
      this.message = "hello";
    }, 0);
  }

  ngAfterViewChecked() {
    console.log('parent component view updated finished');
    setTimeout(() => {
      this.message = "ok";
    }, 0);
  }

```

