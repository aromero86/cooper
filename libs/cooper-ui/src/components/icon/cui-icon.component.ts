import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'cui-icon',
    templateUrl: './cui-icon.component.html',
    styleUrls: ['./cui-icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiIconComponent {

    /** Icon name: https://tablericons.com. By default is *empty* */
    @Input() name = '';

    /** Icon size: `xs: 12px` | `sm: 16px` | `md: 20px` | `lg: 24px` | `xl: 32px` | `xxl: 40px` | `xxxl: 48px`*/
    @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' = 'md';
}
