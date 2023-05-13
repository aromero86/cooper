import { ChangeDetectionStrategy,
         Component,
         Inject,
         Input,
         forwardRef }              from '@angular/core';
// --------------------------------------------------------
import { CuiButtonComponent }      from '../button.component';

@Component({
    selector: 'cui-button-icon',
    templateUrl: './button-icon.component.html',
    styleUrls: ['./button-icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiButtonIconComponent {

    constructor(
        @Inject(forwardRef(() => CuiButtonComponent)) private parentButton: CuiButtonComponent,
    ) { }

    /** Icon name: https://tablericons.com. By default is *empty* */
    @Input() name = '';

    
    public get size() {
        return this.parentButton.size;
    }

}
