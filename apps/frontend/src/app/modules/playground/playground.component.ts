import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cooper-playground',
    templateUrl: './playground.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperPlaygroundComponent { }
