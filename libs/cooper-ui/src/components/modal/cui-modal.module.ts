import { CommonModule }               from '@angular/common';
import { NgModule }                   from '@angular/core';
// --------------------------------------------------------
import { CuiHeadingModule }           from '../heading/cui-heading.module';
import { CuiScrollerModule }          from '../scroller/cui-scroller.module';
// --------------------------------------------------------
import { CuiModalComponent }          from './cui-modal.component';
import { CuiModalBodyComponent }      from './modal-body/cui-modal-body.component';
import { CuiModalContainerComponent } from './modal-container/cui-modal-container.component';
import { CuiModalFooterComponent }    from './modal-footer/cui-modal-footer.component';
import { CuiModalHeaderComponent }    from './modal-header/cui-modal-header.component';
import { CuiModalTitleComponent }     from './modal-title/cui-modal-title.component';
// --------------------------------------------------------
export { CuiModalComponent }          from './cui-modal.component';
export { CuiModalService }            from './cui-modal.service';

@NgModule({
    imports: [
        CommonModule,
        CuiScrollerModule,
        CuiHeadingModule,
    ],
    exports: [
        CuiModalComponent,
        CuiModalBodyComponent,
        CuiModalContainerComponent,
        CuiModalFooterComponent,
        CuiModalHeaderComponent,
        CuiModalTitleComponent,
    ],
    declarations: [
        CuiModalComponent,
        CuiModalBodyComponent,
        CuiModalContainerComponent,
        CuiModalFooterComponent,
        CuiModalHeaderComponent,
        CuiModalTitleComponent,
    ],
})
export class CuiModalModule { }
