import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open')
  toogle : boolean = false ; 
  constructor() { }

  @HostListener("click")  onClick()
  {
    this.toogle = !this.toogle ; 
  }
}
