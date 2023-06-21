import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CuiIconModule } from '../../../icon/cui-icon.module';

@Component({
    selector: 'cui-form-validation-message',
    templateUrl: './cui-form-validation-message.component.html',
    styleUrls: ['./cui-form-validation-message.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule,
        CuiIconModule,
    ]
})
export class CuiFormValidationMessageComponent {

    /** Validation Message appearance mode:
     * - **Values**: `danger` | `warning` | `success`
     * - **Default**: `danger`
    **/
    @Input() mode: 'danger' | 'warning' | 'success' = 'danger'; 

}