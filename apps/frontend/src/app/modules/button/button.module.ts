import { CommonModule }             from '@angular/common';
import { NgModule }                 from '@angular/core';
import { RouterModule,
         Routes }                   from '@angular/router';
// --------------------------------------------------------
import { CuiBadgeComponentModule }  from '@cooper/ui'
// --------------------------------------------------------
import { CooperButtonComponent }    from './button.component';

const routes: Routes = [
    { path: '', component: CooperButtonComponent, },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes),
        CuiBadgeComponentModule,
    ],
    declarations: [
        CooperButtonComponent,
    ],
})
export class CooperButtonModule { }
