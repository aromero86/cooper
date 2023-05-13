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
// --------------------------------------------------------
import { CooperModalExample1Component } from './example-1/cooper-modal-example-1.component';
import { CooperModalComponent }        from './cooper-modal.component';
// import { CooperModalExampleComponent } from './example-1/main/modal-example.component';

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
        CooperModalExample1Component
    ],
    declarations: [
        CooperModalComponent,
        // CooperModalExampleComponent,
        // CooperModalExample1Component,
    ],
})
export class CooperModalModule { }
