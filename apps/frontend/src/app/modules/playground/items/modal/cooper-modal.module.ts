import { CommonModule }                 from '@angular/common';
import { NgModule }                     from '@angular/core';
import { RouterModule,
         Routes }                       from '@angular/router';
// --------------------------------------------------------
import { CuiContainerModule,
         CuiHeadingModule,
         CuiParagraphModule,
         CuiScrollerModule }            from '@cooper/ui';
// --------------------------------------------------------
import { CooperModalExample1Component } from './example-1/cooper-modal-example-1.component';
import { CooperModalComponent }         from './cooper-modal.component';

const routes: Routes = [
    { path: '', component: CooperModalComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes),
        CuiContainerModule,
        CuiHeadingModule,
        CuiParagraphModule,
        CuiScrollerModule,
        CooperModalExample1Component
    ],
    declarations: [
        CooperModalComponent,
    ],
})
export class CooperModalModule { }
