import { CommonModule }        from '@angular/common';
import { NgModule }            from '@angular/core';
// --------------------------------------------------------
import { CuiHeadingComponent } from './cui-heading.component';
// --------------------------------------------------------
export { CuiHeadingComponent } from './cui-heading.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        CuiHeadingComponent,
    ],
    declarations: [
        CuiHeadingComponent,
    ],
})
export class CuiHeadingModule { }
