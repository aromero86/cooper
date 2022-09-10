import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'cui-icon',
    templateUrl: './cui-icon.component.html',
    styleUrls: ['./cui-icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiIconComponent {
    @Input() name = '';
}
