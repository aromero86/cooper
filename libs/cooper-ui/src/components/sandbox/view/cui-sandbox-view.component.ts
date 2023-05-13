import { ChangeDetectionStrategy,
         Component }              from '@angular/core';

@Component({
    selector: 'cui-sandbox-view',
    templateUrl: './cui-sandbox-view.component.html',
    styleUrls: ['./cui-sandbox-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiSandboxViewComponent { }