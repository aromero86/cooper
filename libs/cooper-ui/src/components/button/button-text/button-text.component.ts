import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cui-button-text',
    templateUrl: './button-text.component.html',
    styleUrls: ['./button-text.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiButtonTextComponent { }
