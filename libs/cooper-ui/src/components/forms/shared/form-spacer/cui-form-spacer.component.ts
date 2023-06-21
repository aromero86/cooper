import { CommonModule }             from '@angular/common';
import { ChangeDetectionStrategy,
         Component }                from '@angular/core';

@Component({
    selector: 'cui-form-spacer',
    template: '',
    styles: [`:host { @apply block p-3; }`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule,
    ]
})
export class CuiFormSpacerComponent  { }
