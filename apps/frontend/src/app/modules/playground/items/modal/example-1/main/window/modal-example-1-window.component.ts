import { ChangeDetectionStrategy,
         Component }                   from '@angular/core';
// --------------------------------------------------------
import { CuiButtonModule,
         CuiHeadingModule,
         CuiIconModule,
         CuiModalComponent, 
         CuiModalModule, 
         CuiParagraphModule }          from '@cooper/ui';

@Component({
    templateUrl: './modal-example-1-window.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CuiButtonModule,
        CuiHeadingModule,
        CuiIconModule,
        CuiModalModule,
        CuiParagraphModule,
    ],
})
export class CooperModalExample1WindowComponent extends CuiModalComponent {

    close() {
        this.closeModal();
    }

}
