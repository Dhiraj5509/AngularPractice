import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetter]'
})
export class BetterDirective implements OnInit {

  @Input()
  bgColor : string = 'transparent' ; 

  @HostBinding('style.width.px') width : number = 50 ; 
  @HostBinding('style.width.px') height : number = 50 ; 
  @HostBinding('style.backgroundColor') backGroundColor : string = 'violet' ; 

  constructor(private elementRef:ElementRef , private renderer : Renderer2) {
  }

  ngOnInit(): void {
      this.renderer.setStyle(this.elementRef.nativeElement , 'background-color' , 'blue') ;
  }

  // we can  listen to the event on our own directives 
  @HostListener('mouseover') onHover()
  {
    // this.renderer.setStyle(this.elementRef.nativeElement , 'background-color' , 'black') ; 
    // this.renderer.setStyle(this.elementRef.nativeElement , 'color' , 'white') ; 

    this.backGroundColor = this.bgColor ; 
  }

  @HostListener('mouseout') onOut()
  {
    // this.renderer.setStyle(this.elementRef.nativeElement , 'background-color' , 'blue') ; 
    // this.renderer.setStyle(this.elementRef.nativeElement , 'color' , 'white') ; 
    this.backGroundColor = 'violet' ; 
    this.width = 100 ; 
    this.height = 100 ; 
  }

}
