import { CommonModule }            from '@angular/common';
import { NgModule }                from '@angular/core';
// --------------------------------------------------------
import { CuiDirectivesModule }     from '../../directives';
import { CuiIconModule }           from '../icon/cui-icon.module';
// --------------------------------------------------------
import { CuiButtonComponent }      from './button.component';
import { CuiButtonIconComponent }  from './button-icon/button-icon.component';
import { CuiButtonLabelComponent } from './button-label/button-label.component';
// --------------------------------------------------------
export { CuiButtonComponent }      from './button.component';
export { CuiButtonIconComponent }  from './button-icon/button-icon.component';
export { CuiButtonLabelComponent } from './button-label/button-label.component';

@NgModule({
    imports: [
        CommonModule,
        CuiDirectivesModule,
        CuiIconModule,
    ],
    exports: [
        CuiButtonComponent,
        CuiButtonIconComponent,
        CuiButtonLabelComponent,
    ],
    declarations: [
        CuiButtonComponent,
        CuiButtonIconComponent,
        CuiButtonLabelComponent,
    ],
})
export class CuiButtonModule { }
