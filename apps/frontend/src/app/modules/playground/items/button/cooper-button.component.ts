import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CUI_COLORS } from '@cooper/ui';

@Component({
    selector: 'cooper-button',
    templateUrl: './cooper-button.component.html',
    styleUrls: ['./cooper-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperButtonComponent {

    public colors = CUI_COLORS;
    public modes: ('regular' | 'outline' | 'flat')[] = ['regular', 'outline', 'flat'];
    public sizes: ('xs' | 'sm' | 'md' | 'lg' | 'xl')[] = ['xl', 'lg', 'md', 'sm', 'xs'];

}
