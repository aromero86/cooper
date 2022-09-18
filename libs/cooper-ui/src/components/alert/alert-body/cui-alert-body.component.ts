import { ChangeDetectionStrategy,
         Component }              from '@angular/core';
// --------------------------------------------------------
import { CuiAlertService }        from '../cui-alert.service';

@Component({
    selector: 'cui-alert-body',
    templateUrl: './cui-alert-body.component.html',
    styleUrls: ['./cui-alert-body.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiAlertBodyComponent {

    constructor(
        private cuiAlertService: CuiAlertService,
    ) { }

    public modeIsInfo$ = this.cuiAlertService.modeIsInfo$;
    public modeIsSuccess$ = this.cuiAlertService.modeIsSuccess$;
    public modeIsWarning$ = this.cuiAlertService.modeIsWarning$;
    public modeIsDanger$ = this.cuiAlertService.modeIsDanger$;

}
