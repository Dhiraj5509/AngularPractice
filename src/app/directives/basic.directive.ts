import { Directive, ElementRef, OnInit } from "@angular/core";

// creating our own directive 
@Directive({
    // saying angular that the directive will be used as an  attribute of an element
    selector : '[appBasicHighlight]'
})
export class BasicDirective implements OnInit{

    // the element that uses our directive will be injected by the angular in this element 
    elementRef : ElementRef ; 

    constructor(elementRef:ElementRef)
    {
        this.elementRef = elementRef ; 
    }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'red' ; 
    }
}