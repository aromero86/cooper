import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cui-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiBreadcrumbsComponent { }
