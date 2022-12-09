import { ChangeDetectionStrategy,
         Component }                 from '@angular/core';
// --------------------------------------------------------
import { CuiModalComponent }         from '@cooper/ui';

@Component({
    templateUrl: './modal-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalExampleComponent extends CuiModalComponent {

    close() {
        this.closeModal();
    }

}
