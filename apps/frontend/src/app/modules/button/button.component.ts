import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CUI_COLORS } from '@cooper/ui';

@Component({
    selector: 'cooper-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperButtonComponent {

    public colors = CUI_COLORS;
    public modes: ('regular' | 'outline' | 'flat')[] = ['regular', 'outline', 'flat'];
    public sizes: ('xs' | 'sm' | 'md' | 'lg' | 'xl')[] = ['xl', 'lg', 'md', 'sm', 'xs'];


    // @Input() disabled = false;
    // @Input() rounded = false;

}
