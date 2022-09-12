import { CommonModule }      from '@angular/common';
import { NgModule }          from '@angular/core';
// --------------------------------------------------------
import { CuiAlertComponent } from './cui-alert.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        CuiAlertComponent,
    ],
    declarations: [
        CuiAlertComponent,
    ],
})
export class CuiAlertModule { }
