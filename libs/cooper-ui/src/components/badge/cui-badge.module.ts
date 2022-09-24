import { CommonModule }           from '@angular/common';
import { NgModule }               from '@angular/core';
// --------------------------------------------------------
import { CuiIconModule }          from '../icon/cui-icon.module';
// --------------------------------------------------------
import { CuiBadgetComponent }     from './cui-badge.component';
// --------------------------------------------------------
export { CuiBadgetComponent }     from './cui-badge.component';

@NgModule({
    imports: [
        CommonModule,
        CuiIconModule,
    ],
    exports: [
        CuiBadgetComponent,
    ],
    declarations: [
        CuiBadgetComponent,
    ],
})
export class CuiBadgeModule { }
