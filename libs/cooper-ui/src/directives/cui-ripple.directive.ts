import { Directive, ElementRef, OnInit, HostListener, Renderer2 } from '@angular/core';

@Directive({ 
    selector: '[cui-ripple]'
})
export class CuiRippleDirective implements OnInit {

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
    ) { }

    ngOnInit() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'relative');
        this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', 'hidden');
    }

    @HostListener('mousedown', ['$event']) mousedown(event: MouseEvent & { ripple: boolean }) {
        if (event.ripple)
            return;
        event.ripple = true;
        const top: number = event.offsetY;
        const right: number = this.elementRef.nativeElement.clientWidth - event.offsetX;
        const bottom: number = this.elementRef.nativeElement.clientHeight - event.offsetY;
        const left: number = event.offsetX;
        const maximo: number = Math.max(top, right, bottom, left);
        const efecto = document.createElement('span');
        this.renderer.appendChild(this.elementRef.nativeElement, efecto);
        this.definirEfecto(efecto, top, left, maximo);
    }

    private definirEfecto(effectItem: HTMLSpanElement, top: number, left: number, maximun: number) {
        const minimun: number = maximun / 5;
        this.renderer.setStyle(effectItem, 'display', 'block');
        this.renderer.setStyle(effectItem, 'position', 'absolute');
        this.renderer.setStyle(effectItem, 'width', minimun.toString() + 'px');
        this.renderer.setStyle(effectItem, 'height', minimun.toString() + 'px');
        this.renderer.setStyle(effectItem, 'top', (top - minimun/2).toString() + 'px');
        this.renderer.setStyle(effectItem, 'left', (left - minimun/2).toString() + 'px');
        this.renderer.setStyle(effectItem, 'background', '#00000033');
        this.renderer.setStyle(effectItem, 'display', 'block');
        this.renderer.setStyle(effectItem, 'border-radius', '100%');
        this.renderer.setStyle(effectItem, 'pointer-events', 'none');
        // ---
        this.renderer.setStyle(effectItem, '-webkit-transition', '1.4s ease');
        this.renderer.setStyle(effectItem, '-moz-transition', '1.4s ease');
        this.renderer.setStyle(effectItem, '-o-transition', '1.4s ease');
        this.renderer.setStyle(effectItem, '-ms-transition', '1.4s ease');
        // ---
        setTimeout(() => {
            this.renderer.setStyle(effectItem, 'transform', 'scale(' + 4 * maximun / minimun + ')');
            this.renderer.setStyle(effectItem, 'opacity', '0');
            setTimeout(() => effectItem.remove(), 1500);
        }, 30);
    }

}
