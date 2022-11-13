import { CommonModule }             from '@angular/common';
import { NgModule }                 from '@angular/core';
import { RouterModule,
         Routes }                   from '@angular/router';
// --------------------------------------------------------
import { CuiAccordionModule,
         CuiBadgeModule,
         CuiContainerModule,
         CuiScrollerModule }        from '@cooper/ui';
// --------------------------------------------------------
import { CooperAccordionComponent } from './cooper-accordion.component';

const routes: Routes = [
    { path: '', component: CooperAccordionComponent, },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes),
        CuiAccordionModule,
        CuiBadgeModule,
        CuiContainerModule,
        CuiScrollerModule,
    ],
    declarations: [
        CooperAccordionComponent,
    ],
})
export class CooperAccordionModule { }
