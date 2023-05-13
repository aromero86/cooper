import { ChangeDetectionStrategy,
         Component }              from '@angular/core';

@Component({
    selector: 'cui-modal-header',
    templateUrl: './cui-modal-header.component.html',
    styleUrls: ['./cui-modal-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiModalHeaderComponent {

}
