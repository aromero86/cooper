import { CommonModule }          from '@angular/common';
import { NgModule }              from '@angular/core';
// --------------------------------------------------------
import { CuiIconModule }         from '../icon/cui-icon.module';
// --------------------------------------------------------
import { CuiBadgeComponent }     from './cui-badge.component';
// --------------------------------------------------------
export { CuiBadgeComponent }     from './cui-badge.component';

@NgModule({
    imports: [
        CommonModule,
        CuiIconModule,
    ],
    exports: [
        CuiBadgeComponent,
    ],
    declarations: [
        CuiBadgeComponent,
    ],
})
export class CuiBadgeModule { }
