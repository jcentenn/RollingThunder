import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResponsiveMenu]'
})

export class ResponsiveMenuDirective {

  constructor(el: ElementRef) {
      //el.nativeElement.style.backgroundColor = 'yellow';
      
      console.log('hi');
      
  }

}
