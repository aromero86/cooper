import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'cui-container',
    templateUrl: './cui-container.component.html',
    styleUrls: ['./cui-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiContainerComponent {

    /** Container size. By default `md` 
     * - `sm`: 640px
     * - `md`: 768px
     * - `lg`: 1024px
    **/
    @Input() size: 'sm' | 'md' | 'lg' = 'md';

}
