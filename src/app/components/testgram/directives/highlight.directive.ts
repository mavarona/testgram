import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  @Input() color: string = "black";

  constructor(private _el: ElementRef) {}

  @HostListener("mouseover") onMouseOver() {
    this._el.nativeElement.style.border = "2px solid" + this.color;
    this._el.nativeElement.style.boxShadow = `1px 1px 10px ${this.color}, 1px 1px 10px ${this.color}`;
  }

  @HostListener("mouseout") onMouseOut() {
    this._el.nativeElement.style.border = "none";
    this._el.nativeElement.style.boxShadow = "none";
  }
}
