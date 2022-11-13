import { ChangeDetectionStrategy,
         Component,
         EventEmitter,
         Input,
         Output }                                          from '@angular/core';

@Component({
    selector: 'cui-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiBreadcrumbComponent {

    /** Icon name: https://tablericons.com. By default is *empty* */
    @Input() iconName = 'chevron-right';

    /** Breadcrumb title. Empty by default */
    @Input() title = '';

    /** Click event */
    @Output() clicked = new EventEmitter<MouseEvent>();

    handleClick(event: MouseEvent): void {
        this.clicked.emit(event);
    }

}
