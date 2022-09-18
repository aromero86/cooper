import { CommonModule }               from '@angular/common';
import { NgModule }                   from '@angular/core';
import { RouterModule,
         Routes }                     from '@angular/router';
// --------------------------------------------------------
import { CuiAlertModule,
         CuiButtonComponentModule,
         CuiIconComponentModule,
         CuiScrollerComponentModule } from '@cooper/ui';
// --------------------------------------------------------
import { CooperAlertComponent }       from './cooper-alert.component';

const routes: Routes = [
    { path: '', component: CooperAlertComponent, },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes),
        CuiAlertModule,
        CuiButtonComponentModule,
        CuiIconComponentModule,
        CuiScrollerComponentModule,
    ],
    declarations: [
        CooperAlertComponent
    ],
    providers: [],
})
export class CooperAlertModule { }
