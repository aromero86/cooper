import { CommonModule }          from '@angular/common';
import { NgModule }              from '@angular/core';
// --------------------------------------------------------
import { CuiContainerComponent } from './cui-container.component';
// --------------------------------------------------------
export { CuiContainerComponent } from './cui-container.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        CuiContainerComponent,
    ],
    exports: [
        CuiContainerComponent,
    ]
})
export class CuiContainerModule { }
