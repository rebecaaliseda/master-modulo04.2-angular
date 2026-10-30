import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'img[rotate]',
  standalone: true,
})
export class RotateDirective implements OnInit {
  @Input() rotate = 0;

  @Input() step = 10;

  private currentRotation = 0;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.currentRotation = Number(this.rotate);

    this.applyRotation();
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    if (event.shiftKey) {
      this.currentRotation -= Number(this.step);
    } else {
      this.currentRotation += Number(this.step);
    }

    this.applyRotation();
  }

  private applyRotation(): void {
    this.element.nativeElement.style.transform = `rotate(${this.currentRotation}deg)`;
  }
}
