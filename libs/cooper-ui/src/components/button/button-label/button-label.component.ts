import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cui-button-label',
    templateUrl: './button-label.component.html',
    styleUrls: ['./button-label.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiButtonLabelComponent { }
