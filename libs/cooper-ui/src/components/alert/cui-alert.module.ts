import { CommonModule }            from '@angular/common';
import { NgModule }                from '@angular/core';
// --------------------------------------------------------
import { CuiIconModule }           from '../icon/cui-icon.module';
// --------------------------------------------------------
import { CuiAlertComponent }       from './cui-alert.component';
import { CuiAlertBodyComponent }   from './alert-body/cui-alert-body.component';
import { CuiAlertHeaderComponent } from './alert-header/cui-alert-header.component';
// --------------------------------------------------------
export { CuiAlertComponent }       from './cui-alert.component';
export { CuiAlertBodyComponent }   from './alert-body/cui-alert-body.component';
export { CuiAlertHeaderComponent } from './alert-header/cui-alert-header.component';

@NgModule({
    imports: [
        CommonModule,
        CuiIconModule,
    ],
    exports: [
        CuiAlertComponent,
        CuiAlertBodyComponent,
        CuiAlertHeaderComponent,
    ],
    declarations: [
        CuiAlertComponent,
        CuiAlertBodyComponent,
        CuiAlertHeaderComponent,
    ],
})
export class CuiAlertModule { }
