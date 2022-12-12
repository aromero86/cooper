import { ChangeDetectionStrategy,
         Component }              from '@angular/core';
// --------------------------------------------------------
import { CuiModalService }        from '@cooper/ui';
// --------------------------------------------------------
import { ModalExampleComponent }  from './modal-example/modal-example.component';

@Component({
    selector: 'cooper-modal',
    templateUrl: './cooper-modal.component.html',
    styleUrls: ['./cooper-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperModalComponent {
    public code = `
import { ChangeDetectionStrategy,
         Component }              from '@angular/core';
// --------------------------------------------------------
import { CuiModalService }        from '@cooper/ui';
// --------------------------------------------------------
import { ModalExampleComponent }  from './modal-example/modal-example.component';

@Component({
   selector: 'cooper-modal',
   templateUrl: './cooper-modal.component.html',
   styleUrls: ['./cooper-modal.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperModalComponent {

   constructor(
       private modalService: CuiModalService,
   ) { }

   showModal(): void {
       this.modalService.show({
           modal: ModalExampleComponent,
           onOpen: () => console.log('Abierto'),
           onClose: () => console.log('Cerrado'),
       });
   }

}`.trim();

    constructor(
        private modalService: CuiModalService,
    ) { }

    showModal(): void {
        this.modalService.show({
            modal: ModalExampleComponent,
            onOpen: () => console.log('Abierto'),
            onClose: () => console.log('Cerrado'),
        });
    }



}