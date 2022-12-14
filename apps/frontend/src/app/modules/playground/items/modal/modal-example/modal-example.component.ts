import { ChangeDetectionStrategy,
         Component }                 from '@angular/core';
// --------------------------------------------------------
import { CuiModalService}            from '@cooper/ui';
// --------------------------------------------------------
import { ModalWindowComponent }      from '../modal-window/modal-window.component';

@Component({
    selector: 'cooper-modal-example',
    templateUrl: './modal-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperModalExampleComponent {

    constructor(
        private modalService: CuiModalService,
    ) { }

    showModal(): void {
        this.modalService.show({
            modal: ModalWindowComponent,
            onOpen: () => console.log('Abierto'),
            onClose: () => console.log('Cerrado'),
        });
    }

}
