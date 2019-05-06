import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHidden]'
})
export class HiddenDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
  }

}
