import { ChangeDetectionStrategy,
         Component }              from '@angular/core';

@Component({
    selector: 'cui-modal-footer',
    templateUrl: './cui-modal-footer.component.html',
    styleUrls: ['./cui-modal-footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiModalFooterComponent { }
