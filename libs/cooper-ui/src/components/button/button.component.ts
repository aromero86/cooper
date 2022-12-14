import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'cui-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiButtonComponent {

    /** Button color:
     * - **Values**: `primary` | `accent` | `success` | `warning` | `danger` | `dark`
     * - **Default**: `primary`
    **/
    @Input() color: 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'dark' = 'primary';

    /** Button appearance mode:
     * - **Values**: `regular` | `outline` | `flat`
     * - **Default**: `regular`
    **/
    @Input() mode: 'regular' | 'outline' | 'flat' = 'regular'; 

    /** Button font-size:
     * - **Values**: `xs: 12px` | `sm: 14px` | `md: 16px` | `lg: 18px` | `xl: 20px`
     * - **Default**: `md: 16px`
    **/
    @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

    /** If `true`, button will be disabled. Default `false` */
    @Input() disabled = false;

    /** If `true`, button borders will be rounded. Default `false` */
    @Input() rounded = false;

}
