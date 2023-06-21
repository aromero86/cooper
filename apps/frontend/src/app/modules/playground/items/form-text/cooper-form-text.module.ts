import { CommonModule }              from '@angular/common';
import { NgModule }                  from '@angular/core';
import { RouterModule,
         Routes }                    from '@angular/router';
// --------------------------------------------------------
import { CuiContainerModule,
         CuiHeadingModule,
         CuiParagraphModule,
         CuiScrollerModule, }              from '@cooper/ui'
// --------------------------------------------------------
import { CooperFormTextExample1Component } from './example-1/cooper-form-text-example-1.component';
import { CooperFormTextComponent }         from './cooper-form-text.component';

const routes: Routes = [
    { path: '', component: CooperFormTextComponent },
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
        CooperFormTextExample1Component,
    ],
    declarations: [
        CooperFormTextComponent,
    ],
})
export class CooperFormTextModule { }
