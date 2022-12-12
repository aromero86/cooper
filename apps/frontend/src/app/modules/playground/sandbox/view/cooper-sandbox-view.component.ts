import { ChangeDetectionStrategy,
         Component }              from '@angular/core';

@Component({
    selector: 'cooper-sandbox-view',
    templateUrl: './cooper-sandbox-view.component.html',
    styleUrls: ['./cooper-sandbox-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperSandboxViewComponent { }