import { ChangeDetectionStrategy,
         Component, 
         EventEmitter, 
         HostListener, 
         Output }              from '@angular/core';

@Component({
    selector: 'cui-modal-container',
    templateUrl: './cui-modal-container.component.html',
    styleUrls: ['./cui-modal-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiModalContainerComponent {

    @Output() escape = new EventEmitter<KeyboardEvent>();

    @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        this.escape.emit(event);
    }

}
