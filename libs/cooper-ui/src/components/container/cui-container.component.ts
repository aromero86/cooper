import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'cui-container',
    templateUrl: './cui-container.component.html',
    styleUrls: ['./cui-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiContainerComponent {

    @Input() size: 'sm' | 'md' | 'lg' = 'md';

}
