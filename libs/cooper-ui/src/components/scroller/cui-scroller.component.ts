import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'cui-scroller',
    templateUrl: './cui-scroller.component.html',
    styleUrls: ['./cui-scroller.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiScrollerComponent implements OnInit, OnChanges, OnDestroy {

    constructor(
        private host: ElementRef,
        private renderer: Renderer2,
    ) { }

    @Input() darken = false;
    @Input() horizontal = false;
    @Input() vertical = true;

    private observer!: ResizeObserver;
    private overflow = new BehaviorSubject(false);
    public overflow$ = this.overflow.asObservable();

    ngOnInit(): void {
        this.applyAppearanceClasses();
        this.observer = new ResizeObserver(() => {
            const { clientHeight, scrollHeight } = this.host.nativeElement;
            const { clientWidth, scrollWidth } = this.host.nativeElement;
            console.log({ ne: this.host.nativeElement })
            this.applyHorizontalOverflowClasses(clientWidth !== scrollWidth);
            this.applyVerticalOverflowClasses(clientHeight !== scrollHeight);
        });
        this.observer.observe(this.host.nativeElement);
    }

    ngOnDestroy(): void {
        this.observer.unobserve(this.host.nativeElement);
    }

    ngOnChanges(): void {
        this.applyAppearanceClasses();
    }

    private applyAppearanceClasses(): void {
        if (this.darken) {
            this.renderer.addClass(this.host.nativeElement, 'darken');
        } else {
            this.renderer.removeClass(this.host.nativeElement, 'darken');
        }
        if (this.horizontal) {
            this.renderer.addClass(this.host.nativeElement, 'horizontal');
        } else {
            this.renderer.removeClass(this.host.nativeElement, 'horizontal');
        }
        if (this.vertical) {
            this.renderer.addClass(this.host.nativeElement, 'vertical');
        } else {
            this.renderer.removeClass(this.host.nativeElement, 'vertical');
        }
    }

    private applyHorizontalOverflowClasses(withHorizontalOverflow: boolean): void {
        if (withHorizontalOverflow) {
            this.renderer.addClass(this.host.nativeElement, 'with-horizontal-overflow');
        } else {
            this.renderer.removeClass(this.host.nativeElement, 'with-horizontal-overflow');
        }
    }

    private applyVerticalOverflowClasses(withVerticalOverflow: boolean): void {
        if (withVerticalOverflow) {
            this.renderer.addClass(this.host.nativeElement, 'with-vertical-overflow');
        } else {
            this.renderer.removeClass(this.host.nativeElement, 'with-vertical-overflow');
        }
    }

}
