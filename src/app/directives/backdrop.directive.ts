import {
  Directive,
  OnInit,
  ElementRef,
  Input
} from '@angular/core';

@Directive({
  selector: '[backdrop]'
})
export class BackdropDirective implements OnInit {
  @Input() filters: string;

  constructor(
    public el: ElementRef
  ) { }

  ngOnInit() {
    this.el.nativeElement.style.backdropFilter = this.filters;
  }
}