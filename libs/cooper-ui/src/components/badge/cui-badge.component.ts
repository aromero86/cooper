import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'cui-badge',
    templateUrl: './cui-badge.component.html',
    styleUrls: ['./cui-badge.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiBadgeComponent {

    /** Badge color:
     * - **Values**: `primary` | `accent` | `success` | `warning` | `danger` | `dark`
     * - **Default**: `primary`
    **/
    @Input() color: 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'dark' = 'primary';

    /** Badge label. By default is *empty* */
    @Input() label = '';

    /** Icon name: https://tablericons.com. By default is *empty* */
    @Input() iconName = '';

    /** If `true`, button borders will be rounded. Default `false` */
    @Input() rounded = false;

    /** Badge size:
      * - **Values**: `regular` | `large`
      * - **Default**: `regular`
     **/
    @Input() size: 'regular' | 'large' = 'regular';

}
