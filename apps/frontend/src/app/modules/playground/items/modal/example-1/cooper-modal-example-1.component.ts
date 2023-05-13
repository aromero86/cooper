import { CommonModule }            from '@angular/common';
import { ChangeDetectionStrategy,
         Component }               from '@angular/core';
import { BehaviorSubject }         from 'rxjs';
// --------------------------------------------------------
import { CuiHeadingModule,
         CuiParagraphModule }      from '@cooper/ui';
// --------------------------------------------------------
import { CooperSandboxModule }     from '../../../sandbox/cooper-sandbox.module';
// --------------------------------------------------------
import { CooperModalExample1MainComponent } from './main/modal-example-1-main.component';
import { MainComponentHtml,
         MainComponentTs }                  from './main/modal-example-1-main.snippet';
import { WindowComponentHtml,
         WindowComponentTs }                from './main/window/modal-example-1-window.snippet';

@Component({
    selector: 'cooper-modal-example-1',
    templateUrl: './cooper-modal-example-1.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule,
        CuiHeadingModule,
        CuiParagraphModule,
        CooperSandboxModule,
        CooperModalExample1MainComponent,
    ],
})
export class CooperModalExample1Component {

    private snippets = new BehaviorSubject({
        MainComponentHtml,
        MainComponentTs,
        WindowComponentHtml,
        WindowComponentTs,
    });

    public snippets$ = this.snippets.asObservable();

}
