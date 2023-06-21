import { CommonModule }            from '@angular/common';
import { ChangeDetectionStrategy,
         Component }               from '@angular/core';

@Component({
    selector: 'cui-form-label',
    templateUrl: './cui-form-label.component.html',
    styleUrls: ['./cui-form-label.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule,
    ],
})
export class CuiFormLabelComponent { }
