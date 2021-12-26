import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'appTest'
})
export class TestDirective implements OnInit {

  constructor(private renderer : Renderer2 , private elementRef : ElementRef) { }

  ngOnInit(): void {
      this.renderer.createElement('p'); 
  }
  
}
