import { ChangeDetectionStrategy, Component, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'cui-sidebar-brand',
    templateUrl: './cui-sidebar-brand.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiSidebarBrandComponent {

    @Input() label = 'Cooper UI';
    @Input() logoSrc = 'https://flowbite.com/docs/images/logo.svg';
    @Input() brandClicked = new EventEmitter();

    handleClick(): void {
        this.brandClicked.emit();
    }

}
