import { CommonModule }                from '@angular/common';
import { NgModule }                    from '@angular/core';
import { RouterModule,
         Routes }                      from '@angular/router';
// --------------------------------------------------------
import { CuiButtonModule,
         CuiIconModule,
         CuiScrollerModule, }          from '@cooper/ui'
// --------------------------------------------------------
import { CooperButtonComponent }       from './cooper-button.component';

const routes: Routes = [
    { path: '', component: CooperButtonComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes),
        CuiButtonModule,
        CuiIconModule,
        CuiScrollerModule,
    ],
    declarations: [
        CooperButtonComponent,
    ],
})
export class CooperButtonModule { }
