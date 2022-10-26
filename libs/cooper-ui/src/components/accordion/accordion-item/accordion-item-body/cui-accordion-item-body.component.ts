import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cui-accordion-item-body',
    templateUrl: './cui-accordion-item-body.component.html',
    styleUrls: ['./cui-accordion-item-body.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiAccordionItemBodyComponent { }
