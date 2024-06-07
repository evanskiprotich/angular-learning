import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlighttext]'
})
export class HighlighttextDirective {

  constructor(private el: ElementRef) {

   }

   @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.background = 'blue'
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.background = 'purple'
   }
}
