import { CommonModule }          from '@angular/common';
import { NgModule }              from '@angular/core';
// --------------------------------------------------------
import { CuiDirectivesModule }   from '../../directives';
// --------------------------------------------------------
import { CuiButtonComponent }    from './button.component';
// --------------------------------------------------------
export { CuiButtonComponent }    from './button.component';

@NgModule({
    imports: [
        CommonModule,
        CuiDirectivesModule,
    ],
    exports: [
        CuiButtonComponent,
    ],
    declarations: [
        CuiButtonComponent,
    ],
})
export class CuiButtonComponentModule { }
