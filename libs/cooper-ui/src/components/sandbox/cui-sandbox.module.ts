import { CommonModule }               from '@angular/common';
import { NgModule }                   from '@angular/core';
import { HighlightModule }            from 'ngx-highlightjs';
// --------------------------------------------------------
import { CuiScrollerModule }          from '../scroller/cui-scroller.module';
// --------------------------------------------------------
import { CuiSandboxComponent }        from './cui-sandbox.component';
import { CuiSandboxSnippetComponent } from './snippet/cui-sandbox-snippet.component'
import { CuiSandboxViewComponent }    from './view/cui-sandbox-view.component';
// --------------------------------------------------------
export { CuiSandboxComponent }        from './cui-sandbox.component';
export { CuiSandboxSnippetComponent } from './snippet/cui-sandbox-snippet.component'
export { CuiSandboxViewComponent }    from './view/cui-sandbox-view.component';

@NgModule({
    imports: [
        CommonModule,
        HighlightModule,
        CuiScrollerModule,
    ],
    exports: [
        CuiSandboxComponent,
        CuiSandboxSnippetComponent,
        CuiSandboxViewComponent,
    ],
    declarations: [
        CuiSandboxComponent,
        CuiSandboxSnippetComponent,
        CuiSandboxViewComponent,
    ],
})
export class CuiSandboxModule { }
