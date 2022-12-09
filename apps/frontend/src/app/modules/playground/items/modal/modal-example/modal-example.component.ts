import { ChangeDetectionStrategy,
         Component }                 from '@angular/core';
// --------------------------------------------------------
import { CuiBadgeModule,
         CuiButtonModule,
         CuiModalComponent, 
         CuiModalModule }            from '@cooper/ui';

@Component({
    templateUrl: './modal-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CuiBadgeModule,
        CuiButtonModule,
        CuiModalModule,
    ],
})
export class ModalExampleComponent extends CuiModalComponent {

    close() {
        this.closeModal();
    }

}
