import { CommonModule }       from '@angular/common';
import { NgModule }           from '@angular/core';
// --------------------------------------------------------
import { CuiDarkModeService } from './cui-dark-mode.service';
// --------------------------------------------------------
export { CuiDarkModeService } from './cui-dark-mode.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        CuiDarkModeService,
    ]
})
export class CuiDarkModeModule { }
