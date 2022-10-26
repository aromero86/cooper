import { CommonModule }                   from '@angular/common';
import { NgModule }                       from '@angular/core';
// --------------------------------------------------------
import { CuiIconModule }                  from '../icon/cui-icon.module';
// --------------------------------------------------------
import { CuiAccordionComponent }          from './cui-accordion.component';
import { CuiAccordionItemComponent }      from './accordion-item/cui-accordion-item.component';
import { CuiAccordionItemBodyComponent }  from './accordion-item/accordion-item-body/cui-accordion-item-body.component';
import { CuiAccordionItemLabelComponent } from './accordion-item/accordion-item-label/cui-accordion-item-label.component';
import { CuiAccordionSeparatorComponent } from './accordion-separator/cui-accordion-separator.component';
// --------------------------------------------------------
export { CuiAccordionComponent }          from './cui-accordion.component';
export { CuiAccordionItemComponent }      from './accordion-item/cui-accordion-item.component';
export { CuiAccordionItemBodyComponent }  from './accordion-item/accordion-item-body/cui-accordion-item-body.component';
export { CuiAccordionItemLabelComponent } from './accordion-item/accordion-item-label/cui-accordion-item-label.component';

@NgModule({
    imports: [
        CommonModule,
        CuiIconModule,
    ],
    declarations: [
        CuiAccordionComponent,
        CuiAccordionItemComponent,
        CuiAccordionItemBodyComponent,
        CuiAccordionItemLabelComponent,
        CuiAccordionSeparatorComponent,
    ],
    exports: [
        CuiAccordionComponent,
        CuiAccordionItemComponent,
        CuiAccordionItemBodyComponent,
        CuiAccordionItemLabelComponent,
    ],
})
export class CuiAccordionModule { }
