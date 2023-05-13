import { ChangeDetectionStrategy,
         Component }              from '@angular/core';

@Component({
    selector: 'cui-paragraph',
    templateUrl: './cui-paragraph.component.html',
    styleUrls: ['./cui-paragraph.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiParagraphComponent { }
