import { CommonModule }          from '@angular/common';
import { NgModule }              from '@angular/core';
// --------------------------------------------------------
import { CooperButtonComponent } from './button.component';
// --------------------------------------------------------
export { CooperButtonComponent } from './button.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        CooperButtonComponent,
    ],
    declarations: [
        CooperButtonComponent,
    ],
    providers: [ ],
})
export class CooperButtonModule { }
