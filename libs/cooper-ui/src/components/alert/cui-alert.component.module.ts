import { CommonModule }            from '@angular/common';
import { NgModule }                from '@angular/core';
// --------------------------------------------------------
import { CuiIconComponentModule }  from '../icon/cui-icon.component.module';
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
        CuiIconComponentModule,
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
