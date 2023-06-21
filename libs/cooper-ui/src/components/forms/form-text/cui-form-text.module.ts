import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
// --------------------------------------------------------
import { SharedFormElements }   from '../shared';
import { CuiFormTextComponent } from './cui-form-text.component';
// --------------------------------------------------------
export { CuiFormTextComponent } from './cui-form-text.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedFormElements,
    ],
    exports: [
        CuiFormTextComponent,
        SharedFormElements,
    ],
    declarations: [
        CuiFormTextComponent,
    ],
})
export class CuiFormTextModule { }
