import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

   element: ElementRef
  constructor(private el:ElementRef) {
    el.nativeElement.style.color = 'white'
    el.nativeElement.style.backgroundColor = 'black'
    this.element = el
  }

  ngOnInit(): void {
   this.element.nativeElement.innerText += '- rendered by directive'
  }
  
}
