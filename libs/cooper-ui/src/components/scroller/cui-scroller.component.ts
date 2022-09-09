import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'cui-scroller',
    templateUrl: './cui-scroller.component.html',
    styleUrls: ['./cui-scroller.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiScrollerComponent implements OnInit, OnDestroy {

    constructor(
        private host: ElementRef,
        private renderer: Renderer2,
    ) { }

    private observer!: ResizeObserver;
    private overflow = new BehaviorSubject(false);
    public overflow$ = this.overflow.asObservable();

    ngOnInit(): void {
        this.observer = new ResizeObserver(() => {
            const { clientHeight, scrollHeight } = this.host.nativeElement;
            this.applyClasses(clientHeight !== scrollHeight);
        });
        this.observer.observe(this.host.nativeElement);
    }

    ngOnDestroy(): void {
        this.observer.unobserve(this.host.nativeElement);
    }

    private applyClasses(withOverflow: boolean): void {
        if (withOverflow) {
            this.renderer.addClass(this.host.nativeElement, 'with-overflow');
        } else {
            this.renderer.removeClass(this.host.nativeElement, 'with-overflow');
        }
    }

}
