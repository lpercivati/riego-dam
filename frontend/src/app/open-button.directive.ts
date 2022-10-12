import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOpenButton]'
})
export class OpenButtonDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'CornflowerBlue';
    this.el.nativeElement.style.color = 'White';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'White';
    this.el.nativeElement.style.color = 'CornflowerBlue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'CornflowerBlue';
    this.el.nativeElement.style.color = 'White';
  }
}
