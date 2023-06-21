import { CommonModule }             from '@angular/common';
import { ChangeDetectionStrategy,
         Component }                from '@angular/core';

@Component({
    selector: 'cui-form-helper-text',
    templateUrl: './cui-form-helper-text.component.html',
    styleUrls: ['./cui-form-helper-text.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule,
    ]
})
export class CuiFormHelperTextComponent { }
