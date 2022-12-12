import { CommonModule }          from '@angular/common';
import { NgModule }              from '@angular/core';
import { RouterModule,
         Routes }                from '@angular/router';
import { HighlightModule }       from 'ngx-highlightjs';
// --------------------------------------------------------
import { CuiContainerModule,
         CuiHeadingModule,
         CuiParagraphModule,
         CuiScrollerModule }     from '@cooper/ui';
// --------------------------------------------------------
import { CooperSandboxModule }   from '../../sandbox/cooper-sandbox.module';
import { CooperModalComponent }  from './cooper-modal.component';

const routes: Routes = [
    { path: '', component: CooperModalComponent },
    { path: '**', redirectTo: '' },
];

// TODO | Playground | Crear ejemplo de modales

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes),
        HighlightModule,
        CuiContainerModule,
        CuiHeadingModule,
        CuiParagraphModule,
        CuiScrollerModule,
        CooperSandboxModule,
    ],
    declarations: [
        CooperModalComponent,
    ],
})
export class CooperModalModule { }
