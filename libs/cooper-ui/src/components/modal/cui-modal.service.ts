import { Injectable,
         Type }              from '@angular/core';
// --------------------------------------------------------
import { CuiWrapperService } from '../wrapper/cui-wrapper.service';
import { CuiModalComponent } from './cui-modal.component';

@Injectable({ providedIn: 'root' })
export class CuiModalService {

    constructor(
        private wrapperService: CuiWrapperService,
    ) { }

    show(args: { modal: Type<CuiModalComponent>, onOpen?: () => void, onClose?: () => void }): void {
        const { modal, onOpen, onClose } = args;
        const modalRef = this.wrapperService.modalsContainer?.createComponent(modal);
        if (!modalRef)
            return;
        modalRef.changeDetectorRef.markForCheck();
        if (onOpen) {
            onOpen();
        }
        modalRef.instance.closeModal = () => {
            modalRef.destroy();
            if (onClose) {
                onClose();
            }
        };
    }

}
