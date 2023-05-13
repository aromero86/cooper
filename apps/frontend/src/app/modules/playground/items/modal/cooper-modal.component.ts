import { ChangeDetectionStrategy,
         Component }                   from '@angular/core';

@Component({
    selector: 'cooper-modal',
    templateUrl: './cooper-modal.component.html',
    styleUrls: ['./cooper-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperModalComponent { }
