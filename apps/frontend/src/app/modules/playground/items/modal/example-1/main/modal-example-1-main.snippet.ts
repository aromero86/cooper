export const MainComponentTs = `
import { CommonModule }                       from '@angular/common';
import { ChangeDetectionStrategy,
         Component }                          from '@angular/core';
// --------------------------------------------------------
import { CuiButtonModule,
         CuiModalService}                     from '@cooper/ui';
// --------------------------------------------------------
import { CooperModalExample1WindowComponent } from './window/modal-example-1-window.component';

@Component({
    selector: 'cooper-modal-example-1-main',
    templateUrl: './modal-example-1-main.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule,
        CuiButtonModule,
        CooperModalExample1WindowComponent,
    ],
})
export class CooperModalExample1MainComponent {

    constructor(
        private modalService: CuiModalService,
    ) { }

    showModal(): void {
        this.modalService.show({
            modal: CooperModalExample1WindowComponent,
            onOpen: () => console.log('Abierto'),
            onClose: () => console.log('Cerrado'),
        });
    }

}
`.trim();

export const MainComponentHtml = `
<cui-button (click)="showModal()">
    <cui-button-label>Open modal</cui-button-label>
</cui-button>
`.trim();
