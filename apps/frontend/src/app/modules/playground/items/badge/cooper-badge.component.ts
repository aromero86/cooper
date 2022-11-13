import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cooper-badge',
    templateUrl: './cooper-badge.component.html',
    styleUrls: ['./cooper-badge.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperBadgeComponent { }
