import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBigDamage]'
})
export class BigDamageDirective implements OnInit {

  // @ts-ignore
  @Input() damage: number;
  private renderer: any;
  private el: any;

  constructor(el: ElementRef, renderer: Renderer2) {
    this.el = el;
    this.renderer = renderer;
  }

  ngOnInit(): void {
    if (this.damage > 50) {
      this.renderer.setStyle(this.el.nativeElement, 'border-color', 'red');
    }
  }
}
