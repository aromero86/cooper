import { ChangeDetectionStrategy,
         Component }              from '@angular/core';

@Component({
    selector: 'cui-modal-container',
    templateUrl: './cui-modal-container.component.html',
    styleUrls: ['./cui-modal-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiModalContainerComponent { }
