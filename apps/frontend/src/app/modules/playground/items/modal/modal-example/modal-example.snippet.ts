export const ModalExampleComponentTs = `
import { ChangeDetectionStrategy,
         Component }                 from '@angular/core';
// --------------------------------------------------------
import { CuiModalService}            from '@cooper/ui';
// --------------------------------------------------------
import { ModalWindowComponent }      from './window';

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
`.trim();

export const ModalExampleComponentHtml = `
<cui-button (click)="showModal()">Open modal</cui-button>
`.trim();
