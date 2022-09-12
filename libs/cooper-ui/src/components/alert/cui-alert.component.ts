import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
// --------------------------------------------------------
import { CuiColor } from '../../types';

@Component({
    selector: 'cui-alert',
    templateUrl: './cui-alert.component.html',
    styleUrls: ['./cui-alert.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiAlertComponent {

    @Input() dismissible = false;
    @Input() iconName = '';
    @Input() label = '';
    @Input() color: CuiColor = 'primary';
    @Output() dismissed = new EventEmitter();

}
