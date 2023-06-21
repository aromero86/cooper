import { CommonModule }            from '@angular/common';
import { ChangeDetectionStrategy,
         Component }               from '@angular/core';
// --------------------------------------------------------
import { CuiSandboxModule }        from '@cooper/ui';
import { CooperFormTextExample1MainComponent } from './main/cooper-form-text-example-1-main.component';

@Component({
    selector: 'cooper-form-text-example-1',
    templateUrl: './cooper-form-text-example-1.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule,
        CooperFormTextExample1MainComponent,
        CuiSandboxModule,
    ]
})
export class CooperFormTextExample1Component { }
