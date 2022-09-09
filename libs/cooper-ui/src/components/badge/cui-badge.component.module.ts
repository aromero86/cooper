import { CommonModule }           from '@angular/common';
import { NgModule }               from '@angular/core';
// --------------------------------------------------------
import { CuiIconComponentModule } from '../icon/cui-icon.component.module';
// --------------------------------------------------------
import { CuiBadgetComponent }     from './cui-badge.component';
// --------------------------------------------------------
export { CuiBadgetComponent }     from './cui-badge.component';

@NgModule({
    imports: [
        CommonModule,
        CuiIconComponentModule,
    ],
    exports: [
        CuiBadgetComponent,
    ],
    declarations: [
        CuiBadgetComponent,
    ],
})
export class CuiBadgetComponentModule { }
