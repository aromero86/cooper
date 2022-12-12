import { CommonModule }          from '@angular/common';
import { NgModule }              from '@angular/core';
// --------------------------------------------------------
import { CuiParagraphComponent } from './cui-paragraph.component';
// --------------------------------------------------------
export { CuiParagraphComponent } from './cui-paragraph.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        CuiParagraphComponent,
    ],
    declarations: [
        CuiParagraphComponent,
    ],
})
export class CuiParagraphModule { }
