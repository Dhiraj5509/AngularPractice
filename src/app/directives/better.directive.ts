import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetter]'
})
export class BetterDirective implements OnInit {

  constructor(private elementRef:ElementRef , private renderer : Renderer2) {

  }

  ngOnInit(): void {
      this.renderer.setStyle(this.elementRef.nativeElement , 'background-color' , 'blue') ;
  }

  // we can  listen to the event on our own directives 
  @HostListener('mouseover') onHover()
  {
    this.renderer.setStyle(this.elementRef.nativeElement , 'background-color' , 'black') ; 
    this.renderer.setStyle(this.elementRef.nativeElement , 'color' , 'white') ; 
  }

  @HostListener('mouseout') onOut()
  {
    this.renderer.setStyle(this.elementRef.nativeElement , 'background-color' , 'blue') ; 
    this.renderer.setStyle(this.elementRef.nativeElement , 'color' , 'white') ; 
  }

}
