import { ChangeDetectionStrategy,
         Component, 
         ContentChildren, 
         QueryList }                     from '@angular/core';
// --------------------------------------------------------
import { CooperSandboxSnippetComponent } from './snippet/cooper-sandbox-snippet.component';
import { CooperSandboxService }          from './cooper-sandbox.service';

@Component({
    selector: 'cooper-sandbox',
    templateUrl: './cooper-sandbox.component.html',
    styleUrls: ['./cooper-sandbox.component.scss'],
    providers: [ CooperSandboxService ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperSandboxComponent {

    constructor(
        private sandboxService: CooperSandboxService,
    ) { }

    public snippetsFilenames$ = this.sandboxService.snippetsFilenames$;
    public selectedFilename$ = this.sandboxService.selectedFilename$;

    selectSnippet(filename: string): void {
        this.sandboxService.select(filename);
    }

}
