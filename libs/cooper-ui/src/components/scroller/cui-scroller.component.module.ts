import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';
// --------------------------------------------------------
import { CuiScrollerComponent } from './cui-scroller.component';
// --------------------------------------------------------
export { CuiScrollerComponent } from './cui-scroller.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        CuiScrollerComponent,
    ],
    declarations: [
        CuiScrollerComponent,
    ],
})
export class CuiScrollerComponentModule { }
