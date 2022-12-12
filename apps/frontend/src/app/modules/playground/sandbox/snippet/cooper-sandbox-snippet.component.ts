import { ChangeDetectionStrategy,
         Component, 
         Input, 
         OnInit}                   from '@angular/core';
import { BehaviorSubject }         from 'rxjs';
// --------------------------------------------------------
import { CooperSandboxService }    from '../cooper-sandbox.service';

@Component({
    selector: 'cooper-sandbox-snippet',
    templateUrl: './cooper-sandbox-snippet.component.html',
    styleUrls: ['./cooper-sandbox-snippet.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperSandboxSnippetComponent implements OnInit {

    constructor(
        private sandboxService: CooperSandboxService,
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
