import { Injectable }                    from '@angular/core';
import { BehaviorSubject, map }               from 'rxjs';
// --------------------------------------------------------
import { CuiSandboxSnippetComponent }   from './cui-sandbox.module';

@Injectable()
export class CuiSandboxService {

    private snippets = new BehaviorSubject<{ filename: string, show: () => void, hide: () => void }[]>([]);
    public snippetsFilenames$ = this.snippets.asObservable()
        .pipe(map(snippets => snippets.map(snippet => snippet.filename)));

    private selectedFilename = new BehaviorSubject('');
    public selectedFilename$ = this.selectedFilename.asObservable();

    registerSnippet(snippet: CuiSandboxSnippetComponent): void {
        const snippets = this.snippets.getValue();
        snippets.push({
            filename: snippet.filename,
            show: () => snippet.show(),
            hide: () => snippet.hide(),
        });
        this.snippets.next(snippets);
        if (snippets.length === 1) {
            this.select(snippet.filename);
        }
    }

    select(filename: string): void {
        const snippets = this.snippets.getValue();
        snippets.forEach(snippet => {
            if (snippet.filename === filename) {
                snippet.show();
                this.selectedFilename.next(filename);
            } else {
                snippet.hide();
            }
        });
    }

}
