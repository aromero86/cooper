import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'cui-badge',
    templateUrl: './cui-badge.component.html',
    styleUrls: ['./cui-badge.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiBadgetComponent {

    @Input() color: 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'dark' = 'primary';
    @Input() label = '';
    @Input() iconName = '';
    @Input() rounded = false;
    @Input() size: 'regular' | 'large' = 'regular';

}
