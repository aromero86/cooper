import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cooper-accordion',
    templateUrl: './cooper-accordion.component.html',
    styleUrls: ['./cooper-accordion.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperAccordionComponent { }
