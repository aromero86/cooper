import { CommonModule }               from '@angular/common';
import { NgModule }                   from '@angular/core';
// --------------------------------------------------------
import { CuiScrollerModule }          from '../scroller/cui-scroller.module';
// --------------------------------------------------------
import { CuiModalComponent }          from './cui-modal.component';
import { CuiModalBodyComponent }      from './modal-body/cui-modal-body.component';
import { CuiModalContainerComponent } from './modal-container/cui-modal-container.component';
import { CuiModalFooterComponent }    from './modal-footer/cui-modal-footer.component';
import { CuiModalHeaderComponent }    from './modal-header/cui-modal-header.component';
// --------------------------------------------------------
export { CuiModalComponent }          from './cui-modal.component';
export { CuiModalService }            from './cui-modal.service';

// TODO | Modal | Closer button
// TODO | Modal | Clickable glass should be optional
// TODO | Modal | Close with escape should be optional

@NgModule({
    imports: [
        CommonModule,
        CuiScrollerModule,
    ],
    exports: [
        CuiModalComponent,
        CuiModalBodyComponent,
        CuiModalContainerComponent,
        CuiModalFooterComponent,
        CuiModalHeaderComponent,
    ],
    declarations: [
        CuiModalComponent,
        CuiModalBodyComponent,
        CuiModalContainerComponent,
        CuiModalFooterComponent,
        CuiModalHeaderComponent,
    ],
})
export class CuiModalModule { }
