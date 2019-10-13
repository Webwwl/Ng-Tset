import { Directive, Input, ElementRef, OnInit, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fontColor]'
})
export class FontColorDirective implements OnInit, AfterViewInit {

  @Input() fColor: string

  constructor(public ele: ElementRef, public render: Renderer2) { }

  ngOnInit() {}

  ngAfterViewInit() {
    const el = this.ele.nativeElement
    this.render.setStyle(el, 'color', this.fColor);
  }

}
