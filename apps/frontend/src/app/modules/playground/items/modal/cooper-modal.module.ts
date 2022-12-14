import { CommonModule }                from '@angular/common';
import { NgModule }                    from '@angular/core';
import { RouterModule,
         Routes }                      from '@angular/router';
import { HighlightModule }             from 'ngx-highlightjs';
// --------------------------------------------------------
import { CuiButtonModule,
         CuiContainerModule,
         CuiHeadingModule,
         CuiParagraphModule,
         CuiScrollerModule }           from '@cooper/ui';
// --------------------------------------------------------
import { CooperSandboxModule }         from '../../sandbox/cooper-sandbox.module';
import { CooperModalComponent }        from './cooper-modal.component';
import { CooperModalExampleComponent } from './modal-example/modal-example.component';

const routes: Routes = [
    { path: '', component: CooperModalComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes),
        HighlightModule,
        CuiButtonModule,
        CuiContainerModule,
        CuiHeadingModule,
        CuiParagraphModule,
        CuiScrollerModule,
        CooperSandboxModule,
    ],
    declarations: [
        CooperModalComponent,
        CooperModalExampleComponent,
    ],
})
export class CooperModalModule { }
