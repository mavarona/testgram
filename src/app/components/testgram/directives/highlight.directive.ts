import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  constructor(private _el: ElementRef) {}

  @HostListener("mouseover") onMouseOver() {
    this._el.nativeElement.style.border = "2px solid black";
    this._el.nativeElement.style.boxShadow =
      "1px 1px 10px black, 1px 1px 10px black";
  }

  @HostListener("mouseout") onMouseOut() {
    this._el.nativeElement.style.border = "none";
    this._el.nativeElement.style.boxShadow = "none";
  }
}
