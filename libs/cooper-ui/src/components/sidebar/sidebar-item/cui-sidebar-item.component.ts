import { ChangeDetectionStrategy,
         Component,
         ContentChildren,
         EventEmitter,
         Input,
         Output,
         QueryList }                  from '@angular/core';
import { BehaviorSubject,
         map }                        from 'rxjs';
// --------------------------------------------------------
import { CuiSidebarSubitemComponent } from '../sidebar-subitem/cui-sidebar-subitem.component';

@Component({
    selector: 'cui-sidebar-item',
    templateUrl: './cui-sidebar-item.component.html',
    styleUrls: ['./cui-sidebar-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiSidebarItemComponent {

    @Input() label = '';
    @Input() iconName = '';
    @Output() itemClicked = new EventEmitter<MouseEvent>();
    @ContentChildren(CuiSidebarSubitemComponent) private set submenuItems(value: QueryList<CuiSidebarSubitemComponent>) {
        this.isSubmenu.next(value? value.length > 0 : false);
    }

    private isSubmenu = new BehaviorSubject(false);
    public isSubmenu$ = this.isSubmenu.asObservable();

    private submenuOpened = new BehaviorSubject(false);
    public submenuClosed$ = this.submenuOpened.asObservable().pipe(map(submenuOpened => !submenuOpened));
    public submenuOpened$ = this.submenuOpened.asObservable();

    handleClick(event: MouseEvent): void {
        const isSubmenu = this.isSubmenu.getValue();
        if (isSubmenu) {
            const submenuOpened = this.submenuOpened.getValue();
            this.submenuOpened.next(!submenuOpened);
        } else {
            this.itemClicked.emit(event);
        }
    }

}
