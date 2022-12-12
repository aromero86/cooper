import { ChangeDetectionStrategy,
         Component,
         ElementRef,
         Input,
         OnChanges,
         OnInit, 
         Renderer2 }                 from '@angular/core';

@Component({
    selector: 'cui-heading',
    templateUrl: './cui-heading.component.html',
    styleUrls: ['./cui-heading.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiHeadingComponent implements OnChanges, OnInit {

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
    ) { }
    
    /** Heading level:
     * - **Values**: 1 | 2 | 3 | 4 | 5 | 6
     * - **Default**: 1
    **/
    @Input() level = 1;

    ngOnChanges(): void {
        this.applyClasses();
    }

    ngOnInit(): void {
        this.applyClasses();
    }

    private applyClasses() {
        this.applyLevel(1);
        this.applyLevel(2);
        this.applyLevel(3);
        this.applyLevel(4);
        this.applyLevel(5);
        this.applyLevel(6);
    }

    private applyLevel(levelToCheck: number) {
        if (this.level === levelToCheck) {
            this.renderer.addClass(this.elementRef.nativeElement, `level-${ levelToCheck }`);
        } else {
            this.renderer.removeClass(this.elementRef.nativeElement, `level-${ levelToCheck }`);
        }
    }

}
