import { CommonModule }             from '@angular/common';
import { NgModule }                 from '@angular/core';
import { RouterModule,
         Routes }                   from '@angular/router';
// --------------------------------------------------------
import { CuiBadgeModule,
         CuiContainerModule, 
         CuiScrollerModule }        from '@cooper/ui'
// --------------------------------------------------------
import { CooperBadgeComponent }     from './cooper-badge.component';

const routes: Routes = [
    { path: '', component: CooperBadgeComponent, },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes),
        CuiBadgeModule,
        CuiContainerModule,
        CuiScrollerModule,
    ],
    declarations: [
        CooperBadgeComponent,
    ],
})
export class CooperBadgeModule { }
