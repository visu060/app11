import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHappy]'
})
export class HappyDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input('appHappy') highlightColor : string = 'green';
  @HostBinding('style.backgroundColor') backgroundColor : string ;
  constructor(private elRef: ElementRef, private renderer : Renderer2) { }

  ngOnInit() {
    this.backgroundColor= this.defaultColor;

  }
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color' ,'green');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLleaave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent ');
    this.backgroundColor = this.defaultColor;
  }

}
