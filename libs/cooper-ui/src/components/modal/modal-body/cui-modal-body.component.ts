import { ChangeDetectionStrategy,
         Component }               from '@angular/core';

@Component({
    selector: 'cui-modal-body',
    templateUrl: './cui-modal-body.component.html',
    styleUrls: ['./cui-modal-body.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiModalBodyComponent { }
