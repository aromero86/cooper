import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'cui-sidebar-subitem',
    templateUrl: './cui-sidebar-subitem.component.html',
    styleUrls: ['./cui-sidebar-subitem.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiSidebarSubitemComponent {

    @Input() label = '';
    @Input() iconName = '';
    @Output() subitemClicked = new EventEmitter<MouseEvent>();

    handleClick(event: MouseEvent): void {
        this.subitemClicked.emit(event);
    }

}
