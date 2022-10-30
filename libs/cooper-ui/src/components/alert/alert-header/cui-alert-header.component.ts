import { ChangeDetectionStrategy,
         Component }             from '@angular/core';
// --------------------------------------------------------
import { CuiAlertService }       from '../cui-alert.service';

@Component({
    selector: 'cui-alert-header',
    templateUrl: './cui-alert-header.component.html',
    styleUrls: ['./cui-alert-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiAlertHeaderComponent {

    constructor(
        private cuiAlertService: CuiAlertService,
    ) { }

    public dismissible$ = this.cuiAlertService.dismissible$;
    public modeIsInfo$ = this.cuiAlertService.modeIsInfo$;
    public modeIsSuccess$ = this.cuiAlertService.modeIsSuccess$;
    public modeIsWarning$ = this.cuiAlertService.modeIsWarning$;
    public modeIsDanger$ = this.cuiAlertService.modeIsDanger$;
    public alertHasBody$ = this.cuiAlertService.alertHasBody$;

    dismiss(): void {
        this.cuiAlertService.dismiss();
    }

}
