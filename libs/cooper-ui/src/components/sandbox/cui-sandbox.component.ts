import { ChangeDetectionStrategy,
         Component }              from '@angular/core';
// --------------------------------------------------------
import { CuiSandboxService }   from './cui-sandbox.service';

@Component({
    selector: 'cui-sandbox',
    templateUrl: './cui-sandbox.component.html',
    styleUrls: ['./cui-sandbox.component.scss'],
    providers: [ CuiSandboxService ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiSandboxComponent {

    constructor(
        private sandboxService: CuiSandboxService,
    ) { }

    public snippetsFilenames$ = this.sandboxService.snippetsFilenames$;
    public selectedFilename$ = this.sandboxService.selectedFilename$;

    selectSnippet(filename: string): void {
        this.sandboxService.select(filename);
    }

}
