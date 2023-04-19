import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'cui-modal-title',
    templateUrl: './cui-modal-title.component.html',
    styleUrls: ['./cui-modal-title.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiModalTitleComponent {

    /** Title alignment:
     * - **Values**: `left` | `center`
     * - **Default**: `left`
    **/
    @Input() alignment: 'left' | 'center' = 'left';

}
