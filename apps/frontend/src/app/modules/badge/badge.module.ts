import { CommonModule }             from '@angular/common';
import { NgModule }                 from '@angular/core';
// --------------------------------------------------------
import { CuiBadgetComponentModule } from '@cooper/ui'
// --------------------------------------------------------
import { CooperBadgeComponent }     from './badge.component';

@NgModule({
    imports: [
        CommonModule,
        CuiBadgetComponentModule,
    ],
    declarations: [
        CooperBadgeComponent,
    ],
})
export class CooperBadgeModule { }
