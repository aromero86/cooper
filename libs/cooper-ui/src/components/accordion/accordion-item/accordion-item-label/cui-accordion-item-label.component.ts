import { ChangeDetectionStrategy,
         Component }                 from '@angular/core';
import { map,
         Observable }                from 'rxjs';
// --------------------------------------------------------
import { CuiAccordionItemComponent } from '../cui-accordion-item.component';

@Component({
    selector: 'cui-accordion-item-label',
    templateUrl: './cui-accordion-item-label.component.html',
    styleUrls: ['./cui-accordion-item-label.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiAccordionItemLabelComponent {

    public itemIsOpened$ = new Observable<boolean>();
    public itemIsClosed$ = new Observable<boolean>();

    subscribe(item: CuiAccordionItemComponent) {
        this.itemIsOpened$ = item.isOpened$;
        this.itemIsClosed$ = this.itemIsOpened$.pipe(map(itemIsOpened => !itemIsOpened));
    }

}

