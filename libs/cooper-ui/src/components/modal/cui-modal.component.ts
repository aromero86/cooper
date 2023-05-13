import { ChangeDetectionStrategy,
         Component }          from '@angular/core';

@Component({
    selector: 'cui-modal',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiModalComponent {

    closeModal: () => void = () => null

}
