import {Directive, OnInit} from '@angular/core';

@Directive({
  selector: '[appHidden]'
})
export class HiddenDirective implements OnInit {
  ngOnInit(): void {
  }
}
