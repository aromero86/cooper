import { ChangeDetectionStrategy,
         Component,
         ContentChildren,
         Input,
         QueryList }               from '@angular/core';
import { BehaviorSubject }         from 'rxjs';
// --------------------------------------------------------
import { CuiButtonLabelComponent } from './button.module';

@Component({
    selector: 'cui-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiButtonComponent {

    private buttonHasLabel = new BehaviorSubject(false);
    public buttonHasLabel$ = this.buttonHasLabel.asObservable();
    @ContentChildren(CuiButtonLabelComponent) private set buttonLabels(value: QueryList<CuiButtonLabelComponent>) {
        this.buttonHasLabel.next(value.length > 0);
    }

    /** Button color:
     * - **Values**: `primary` | `accent` | `success` | `warning` | `danger` | `dark` | `light`
     * - **Default**: `primary`
    **/
    @Input() color: 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'dark' | 'light' = 'primary';

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
