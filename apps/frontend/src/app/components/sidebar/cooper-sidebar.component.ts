import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cooper-sidebar',
    templateUrl: './cooper-sidebar.component.html',
    styleUrls: ['./cooper-sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperSidebarComponent { }
