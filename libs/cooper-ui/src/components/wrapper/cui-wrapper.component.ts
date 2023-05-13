import { ChangeDetectionStrategy,
         Component, 
         ViewChild,
         ViewContainerRef }       from '@angular/core';
// --------------------------------------------------------
import { CuiWrapperService }      from './cui-wrapper.service';

@Component({
    selector: 'cui-wrapper',
    templateUrl: './cui-wrapper.component.html',
    styleUrls: ['./cui-wrapper.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiWrapperComponent {

    @ViewChild('modals', { read: ViewContainerRef, static: true }) modalsContainer: ViewContainerRef | undefined;

    constructor(
        private wrapperService: CuiWrapperService,
    ) {
        this.wrapperService.bindWrapperComponent(this);
    }

}
