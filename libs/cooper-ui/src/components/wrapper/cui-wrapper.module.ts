import { CommonModule }        from '@angular/common';
import { NgModule }            from '@angular/core';
// --------------------------------------------------------
import { CuiWrapperComponent } from './cui-wrapper.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        CuiWrapperComponent,
    ],
    declarations: [
        CuiWrapperComponent,
    ],
})
export class CuiWrapperModule { }
