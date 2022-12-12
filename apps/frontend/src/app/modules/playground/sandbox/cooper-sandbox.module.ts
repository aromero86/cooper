import { CommonModule }                  from '@angular/common';
import { NgModule }                      from '@angular/core';
import { HighlightModule }               from 'ngx-highlightjs';
// --------------------------------------------------------
import { CooperSandboxComponent }        from './cooper-sandbox.component';
import { CooperSandboxSnippetComponent } from './snippet/cooper-sandbox-snippet.component'
import { CooperSandboxViewComponent }    from './view/cooper-sandbox-view.component';
// --------------------------------------------------------
export { CooperSandboxComponent }        from './cooper-sandbox.component';
export { CooperSandboxSnippetComponent } from './snippet/cooper-sandbox-snippet.component'
export { CooperSandboxViewComponent }    from './view/cooper-sandbox-view.component';

@NgModule({
    imports: [
        CommonModule,
        HighlightModule,
    ],
    exports: [
        CooperSandboxComponent,
        CooperSandboxSnippetComponent,
        CooperSandboxViewComponent,
    ],
    declarations: [
        CooperSandboxComponent,
        CooperSandboxSnippetComponent,
        CooperSandboxViewComponent,
    ],
})
export class CooperSandboxModule { }
