import { ChangeDetectionStrategy,
         Component, 
         Input, 
         OnInit }                  from '@angular/core';
import { BehaviorSubject }         from 'rxjs';
// --------------------------------------------------------
import { CuiSandboxService }    from '../cui-sandbox.service';

@Component({
    selector: 'cui-sandbox-snippet',
    templateUrl: './cui-sandbox-snippet.component.html',
    styleUrls: ['./cui-sandbox-snippet.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiSandboxSnippetComponent implements OnInit {

    constructor(
        private sandboxService: CuiSandboxService,
    ) { }

    @Input() filename = 'Example';
    @Input() language: 'typescript' | 'html' | 'scss' = 'typescript';
    @Input() code = '';

    private isVisible = new BehaviorSubject(false);
    public isVisible$ = this.isVisible.asObservable();

    ngOnInit(): void {
        this.sandboxService.registerSnippet(this);
    }

    show(): void {
        this.isVisible.next(true);
    }

    hide(): void {
        this.isVisible.next(false);
    }

}
