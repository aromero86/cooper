import { ChangeDetectionStrategy, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
    selector: 'cui-scroller',
    templateUrl: './cui-scroller.component.html',
    styleUrls: ['./cui-scroller.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiScrollerComponent {

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
    ) { }

}
