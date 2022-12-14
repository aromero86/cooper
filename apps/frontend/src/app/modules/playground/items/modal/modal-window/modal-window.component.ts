import { ChangeDetectionStrategy,
         Component }                   from '@angular/core';
// --------------------------------------------------------
import { CuiButtonModule,
         CuiHeadingModule,
         CuiModalComponent, 
         CuiModalModule, 
         CuiParagraphModule }          from '@cooper/ui';

@Component({
    templateUrl: './modal-window.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CuiButtonModule,
        CuiHeadingModule,
        CuiModalModule,
        CuiParagraphModule,
    ],
})
export class ModalWindowComponent extends CuiModalComponent {

    close() {
        this.closeModal();
    }

}
