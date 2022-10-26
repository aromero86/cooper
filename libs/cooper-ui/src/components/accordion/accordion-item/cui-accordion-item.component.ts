import { ChangeDetectionStrategy,
         Component,
         ContentChildren,
         EventEmitter,
         Input,
         OnDestroy,
         OnInit, 
         Output, 
         QueryList }                      from '@angular/core';
import { nanoid }                         from 'nanoid'
import { BehaviorSubject }                from 'rxjs';
// --------------------------------------------------------
import { CuiAccordionService }            from '../cui-accordion.service';
import { CuiAccordionItemLabelComponent } from './accordion-item-label/cui-accordion-item-label.component';

@Component({
    selector: 'cui-accordion-item',
    templateUrl: './cui-accordion-item.component.html',
    styleUrls: ['./cui-accordion-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiAccordionItemComponent implements OnInit, OnDestroy {

    @Input() openOnInit = false;
    @Output() statusChange = new EventEmitter<{ isOpened: boolean }>();
    @ContentChildren(CuiAccordionItemLabelComponent) private set body(value: QueryList<CuiAccordionItemLabelComponent>) {
        if (value.length === 0)
            return;
        value.map(itemLabel => itemLabel.subscribe(this));
    }

    public readonly id: string;

    private isOpened = new BehaviorSubject(false);
    public isOpened$ = this.isOpened.asObservable();

    constructor(
        private cuiAccordionService: CuiAccordionService,
    ) {
        this.id = nanoid();
    }

    ngOnInit(): void {
        this.cuiAccordionService.registerItem(this);
        if (this.openOnInit) {
            this.open();
        }
    }

    ngOnDestroy(): void {
        this.cuiAccordionService.unregisterItem(this);
    }

    toggle(): void {
        const isOpened = this.isOpened.value;
        if (isOpened) {
            this.close();
        } else {
            this.open();
        }
    }

    open(): void {
        this.isOpened.next(true);
        this.statusChange.emit({ isOpened: true });
    }

    close(): void {
        this.isOpened.next(false);
        this.statusChange.emit({ isOpened: false });
    }

}
