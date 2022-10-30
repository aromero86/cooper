import { CommonModule }          from '@angular/common';
import { NgModule }               from '@angular/core';
// --------------------------------------------------------
import { CuiDirectivesModule }    from '../../directives';
// --------------------------------------------------------
import { CuiButtonComponent }     from './button.component';
import { CuiButtonTextComponent } from './button-text/button-text.component';
// --------------------------------------------------------
export { CuiButtonComponent }     from './button.component';
export { CuiButtonTextComponent } from './button-text/button-text.component';

@NgModule({
    imports: [
        CommonModule,
        CuiDirectivesModule,
    ],
    exports: [
        CuiButtonComponent,
        CuiButtonTextComponent,
    ],
    declarations: [
        CuiButtonComponent,
        CuiButtonTextComponent,
    ],
})
export class CuiButtonModule { }
