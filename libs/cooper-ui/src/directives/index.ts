import { CommonModule }       from '@angular/common';
import { NgModule }           from '@angular/core';
// --------------------------------------------------------
import { CuiRippleDirective } from './cui-ripple.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        CuiRippleDirective,
    ],
    declarations: [
        CuiRippleDirective,
    ],
})
export class CuiDirectivesModule { }
