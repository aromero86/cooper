import { ChangeDetectionStrategy,
         Component, 
         Input,
         OnChanges,
         OnInit }                    from '@angular/core';
// --------------------------------------------------------
import { CuiAccordionService }       from './cui-accordion.service';

@Component({
    selector: 'cui-accordion',
    templateUrl: './cui-accordion.component.html',
    styleUrls: ['./cui-accordion.component.scss'],
    providers: [ CuiAccordionService ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiAccordionComponent implements OnChanges, OnInit {

    /** If `true`, only one `Accordion Item` will be able to be opened at the same time. Default `true` */
    @Input() onlyOneElemenetOpenedAtOnce = true;

    constructor(
        private cuiAccordionService: CuiAccordionService,
    ) { }

    ngOnInit(): void {
        this.cuiAccordionService.setOnlyOneElemenetOpenedAtOnce(this.onlyOneElemenetOpenedAtOnce);
    }

    ngOnChanges(): void {
        this.cuiAccordionService.setOnlyOneElemenetOpenedAtOnce(this.onlyOneElemenetOpenedAtOnce);
    }

}
