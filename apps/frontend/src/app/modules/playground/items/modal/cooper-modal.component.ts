import { ChangeDetectionStrategy,
         Component }                   from '@angular/core';
import { BehaviorSubject }             from 'rxjs';
// --------------------------------------------------------
import { ModalExampleComponentHtml,
         ModalExampleComponentTs }     from './modal-example/modal-example.snippet';
import { ModalWindowComponentHtml,
         ModalWindowComponentTs }      from './modal-window/modal-window.snippet';

@Component({
    selector: 'cooper-modal',
    templateUrl: './cooper-modal.component.html',
    styleUrls: ['./cooper-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperModalComponent {

    private snippets = new BehaviorSubject({
        ModalExampleComponentTs,
        ModalExampleComponentHtml,
        ModalWindowComponentHtml,
        ModalWindowComponentTs,
    });

    public snippets$ = this.snippets.asObservable();

}
